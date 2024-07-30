from crud.abstract import BaseCrud
from models.models import Course
from sqlalchemy import select
from sqlalchemy.orm import selectinload


class CourseCrud(BaseCrud):
    model = Course

    async def get_id(
        self,
        course_id: str,
    ):
        result = await self.session.execute(
            select(Course)
            .where(Course.id == course_id)
            .options(selectinload(Course.channel), selectinload(Course.video))
        )
        course = result.scalars().first()

        return course
