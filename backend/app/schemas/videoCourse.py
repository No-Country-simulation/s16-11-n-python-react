from .course import CourseVideoSchema
from pydantic import BaseModel
from datetime import date


class VideoBase(BaseModel):
    id: str
    title: str
    thumbnail: str
    description: str | None = None
    published_at: date

    class Config:
        from_attributes = True


class VideoSchemaId(BaseModel):
    video: VideoBase
    course: CourseVideoSchema
