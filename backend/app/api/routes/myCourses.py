from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.myCourses import MyCoursesCrud
from fastapi import APIRouter, Depends, status
from schemas.myCourse import MyCoursesSchema
from sqlalchemy.ext.asyncio.session import AsyncSession

router = APIRouter()


@router.get(
    "/{my_courses_id}/",
    status_code=status.HTTP_200_OK,
    response_model=MyCoursesSchema,
)
async def get_my_courses(
    my_courses_id: int,
    db: AsyncSession = Depends(get_session),
    curret_user: str = Depends(validate_authenticate_user),
):
    my_courses = await MyCoursesCrud(db).get(my_courses_id)

    return my_courses


# @router.post(
#     "/{my_courses_id}/",
#     status_code=status.HTTP_200_OK,
#     response_model=MyCoursesSchema,
# )
# async def add_course():
#     pass
