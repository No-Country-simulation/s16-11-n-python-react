from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.user import UserCrud
from crud.myCourses import MyCoursesCrud
from fastapi import APIRouter, Depends, HTTPException, status
from schemas.user import UserSchema, UserCreate
from schemas.myCourse import MyCoursesCreate
from sqlalchemy.ext.asyncio.session import AsyncSession
from utils.password import hash

router = APIRouter()


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=UserSchema)
async def create_user(
    user_create: UserCreate,
    db: AsyncSession = Depends(get_session),
):
    exist_user = await UserCrud(db).get_by_attribute("email", user_create.email)
    if exist_user:
        raise HTTPException(
            status_code=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
            detail=f"User with email{exist_user.email} is already registered",
        )
    hashed_password = await hash(user_create.password)
    user_create.password = hashed_password
    new_user = await UserCrud(db).create(user_create)
    user_id = new_user.id

    my_courses_create = MyCoursesCreate(user_id=user_id)
    await MyCoursesCrud(db).create(my_courses_create)

    return new_user


@router.get("/{user_id}/", status_code=status.HTTP_200_OK)
async def get_user_id(
    user_id: int,
    db: AsyncSession = Depends(get_session),
    curret_user: str = Depends(validate_authenticate_user),
):
    user = await UserCrud(db).get(user_id)

    return user


@router.delete("/{user_id}/", status_code=status.HTTP_200_OK)
async def delete_user(
    user_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    await UserCrud(db).delete(user_id)
