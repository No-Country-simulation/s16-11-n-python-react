from typing import List
from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio.session import AsyncSession
from schemas.course import CourseSchema, CourseSchemaId
from crud.course import CourseCrud

router = APIRouter()


# @router.post(
#     "/{channel_id}/",
#     status_code=status.HTTP_201_CREATED,
#     response_model=CourseSchema,
# )
# async def create_course(
#     channel_id: str,
#     create_course: CourseCreate,
#     db: AsyncSession = Depends(get_session),
#     current_user: str = Depends(validate_authenticate_user),
# ):
#     new_course = await CourseCrud(db).create(
#         create_course.model_copy(update={"channel_id": channel_id})
#     )

#     return new_course


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[CourseSchema],
)
async def get_all_course(
    db: AsyncSession = Depends(get_session),
):
    """
    Gets a list of all courses available in the database.
    """
    try:
        courses = await CourseCrud(db).get_all()
        return courses
    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred while fetching the courses",
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred.",
        )


@router.get(
    "/{course_id}/",
    status_code=status.HTTP_200_OK,
    response_model=CourseSchemaId,
)
async def get_course_id(
    course_id: str,
    db: AsyncSession = Depends(get_session),
):
    """
    Gets a course by its ID. If the course does not exist, a 404 error is returned.
    """
    try:
        course = await CourseCrud(db).get_id(course_id)
        if course is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Course with id {course_id} not found.",
            )
        return course
    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred while fetching the course",
        )


# @router.delete(
#     "/{course_id}/",
#     status_code=status.HTTP_200_OK,
# )
# async def delete_course(
#     course_id: str,
#     db: AsyncSession = Depends(get_session),
#     current_user: str = Depends(validate_authenticate_user),
# ):

#     await CourseCrud(db).delete(course_id)
