from pydantic import BaseModel
from datetime import date


class CourseBase(BaseModel):
    channel_id: int
    tittle: str
    description: str | None = None
    published_ad: date


class CourseCreate(CourseBase):
    pass


class CourseSchema(CourseBase):
    id: int

    # Ver si funciona de esta manera
    # video: List[VideoSchema] | None = []

    class Config:
        from_attributes = True
