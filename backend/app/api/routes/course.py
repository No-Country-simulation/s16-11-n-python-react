from typing import List
from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio.session import AsyncSession
from schemas.course import CourseCreate, CourseSchema
from crud.course import CourseCrud

router = APIRouter()


@router.post(
    "/{channel_id}/",
    status_code=status.HTTP_201_CREATED,
    response_model=CourseSchema,
)
async def create_course(
    channel_id: int,
    create_course: CourseCreate,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    new_course = await CourseCrud(db).create(
        create_course.model_copy(update={"channel_id": channel_id})
    )

    return new_course


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[CourseSchema],
)
async def get_all_course(
    db: AsyncSession = Depends(get_session),
):
    courses = await CourseCrud(db).get_all()

    return courses


@router.get(
    "/{course_id}/",
    status_code=status.HTTP_200_OK,
    response_model=CourseSchema,
)
async def get_course_id(
    course_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    course = await CourseCrud(db).get(course_id)

    return course


@router.delete(
    "/{course_id}/",
    status_code=status.HTTP_200_OK,
)
async def delete_course(
    course_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):

    await CourseCrud(db).delete(course_id)
