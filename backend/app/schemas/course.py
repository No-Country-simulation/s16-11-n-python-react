from typing import List
from pydantic import BaseModel
from datetime import date
from .video import VideoCourseSchema
from .channel import ChannelSchema


class CourseBase(BaseModel):
    channel_id: str | None = None
    title: str
    thumbnail: str | None = None
    description: str | None = None
    published_at: date
    video: List[VideoCourseSchema] | None = []


class CourseCreate(CourseBase):
    pass


class CourseSchema(CourseBase):
    id: str

    class Config:
        from_attributes = True


class CourseVideoSchema(BaseModel):
    title: str
    thumbnail: str | None = None
    description: str | None = None
    published_at: date


class CourseSchemaId(CourseSchema):
    channel: ChannelSchema
