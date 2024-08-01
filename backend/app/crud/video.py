from crud.abstract import BaseCrud
from models.models import Video, Course
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload


class VideoCrud(BaseCrud):
    model = Video

    async def get_id(
        self,
        video_id: str,
    ):
        result = await self.session.execute(
            select(Video)
            .where(Video.id == video_id)
            .options(selectinload(Video.course))
        )
        video = result.scalars().first()
        return video

    async def get_course_with_videos(
        self,
        course_id: str,
    ):
        result = await self.session.execute(
            select(Course)
            .where(Course.id == course_id)
            .options(selectinload(Course.video))
        )
        course = result.scalars().first()
        return course
