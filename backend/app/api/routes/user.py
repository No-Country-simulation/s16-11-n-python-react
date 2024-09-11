from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from sqlalchemy.exc import SQLAlchemyError
from crud.user import UserCrud
from crud.myCourses import MyCoursesCrud
from fastapi import APIRouter, Depends, HTTPException, status
from schemas.user import UserSchema, UserCreate
from schemas.myCourse import MyCoursesCreate
from sqlalchemy.ext.asyncio.session import AsyncSession
from utils.password import hash

router = APIRouter()


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
    response_model=UserSchema,
)
async def create_user(
    user_create: UserCreate,
    db: AsyncSession = Depends(get_session),
):
    """
    Create a new user. Checks if the user already exists by email.
    If it doesn't exist, creates the user and automatically assigns a MyCourses to it.
    """
    exist_user = await UserCrud(db).get_by_attribute("email", user_create.email)
    if exist_user:
        raise HTTPException(
            status_code=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
            detail=f"User with email '{exist_user.email}' is already registered",
        )
    hashed_password = await hash(user_create.password)
    user_create.password = hashed_password
    new_user = await UserCrud(db).create(user_create)
    user_id = new_user.id

    my_courses_create = MyCoursesCreate(user_id=user_id)
    await MyCoursesCrud(db).create(my_courses_create)

    return new_user


@router.get(
    "/{user_id}/",
    status_code=status.HTTP_200_OK,
    response_model=UserSchema,
)
async def get_user_id(
    user_id: int,
    db: AsyncSession = Depends(get_session),
    curret_user: str = Depends(validate_authenticate_user),
):
    """
    Retrieves a user by its ID. Checks that the user exists in the database.
    """
    try:
        user = await UserCrud(db).get(user_id)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"User with id {user_id} not exist",
            )
        return user

    except ValueError as ve:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(ve),
        )
    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred",
        )


@router.delete(
    "/{user_id}/",
    status_code=status.HTTP_200_OK,
)
async def delete_user(
    user_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    """
    Delete a user by their ID. Check that the user exists before deleting them.
    """
    try:
        await UserCrud(db).delete(user_id)
        return {"message": f"User with id {user_id} has been successfully deleted."}

    except ValueError as ve:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(ve),
        )
    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred",
        )
