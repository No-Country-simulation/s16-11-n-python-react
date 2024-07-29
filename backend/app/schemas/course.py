from pydantic import BaseModel
from datetime import date


class CourseBase(BaseModel):
    id: str
    channel_id: str | None = None
    title: str
    # thumbnail: str
    description: str | None = None
    published_at: date


class CourseCreate(CourseBase):
    pass


class CourseSchema(CourseBase):
    id: str

    # Ver si funciona de esta manera
    # video: List[VideoSchema] | None = []

    class Config:
        from_attributes = True
