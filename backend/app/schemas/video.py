from pydantic import BaseModel
from datetime import date


class VideoBase(BaseModel):
    course_id: int | None = None
    tittle: str
    thumbnail: str
    description: str | None = None
    published_ad: date


class VideoCreate(VideoBase):
    pass


class VideoSchema(VideoBase):
    id: int

    class Config:
        from_attributes = True
