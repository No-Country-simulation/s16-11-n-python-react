from pydantic import BaseModel
from datetime import date


class VideoBase(BaseModel):
    id: str
    course_id: str | None = None
    title: str
    thumbnail: str
    description: str | None = None
    published_at: date


class VideoCreate(VideoBase):
    pass


class VideoSchema(VideoBase):
    id: str

    class Config:
        from_attributes = True
