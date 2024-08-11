from typing import List, TYPE_CHECKING, Optional
from core.database import Base
from sqlalchemy import Date, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.channel import Channel
    from app.models.myCourses import MyCourses
    from app.models.video import Video
else:
    Channel = "Channel"
    MyCourses = "MyCourses"
    Video = "Video"


class Course(Base):
    __tablename__ = "course"
    id: Mapped[str] = mapped_column(
        String, primary_key=True, unique=True, nullable=False
    )
    title: Mapped[str] = mapped_column(String)
    thumbnail: Mapped[str] = mapped_column(String)
    description: Mapped[Optional[str]] = mapped_column(String)
    published_at: Mapped[Date] = mapped_column(Date)
    # is_active: Mapped[bool] = mapped_column(default=True)

    channel_id: Mapped[Optional[str]] = mapped_column(ForeignKey("channel.id"))

    my_courses_id: Mapped[Optional[int]] = mapped_column(ForeignKey("my_courses.id"))

    channel: Mapped[Channel] = relationship(
        back_populates="course",
    )

    my_courses: Mapped[MyCourses] = relationship(
        back_populates="course",
    )

    video: Mapped[List[Video]] = relationship(
        back_populates="course",
        lazy="selectin",
    )
