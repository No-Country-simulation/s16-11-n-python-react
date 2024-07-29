from typing import TYPE_CHECKING, Optional
from core.database import Base
from sqlalchemy import Date, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.course import Course
else:
    Course = "Course"


class Video(Base):
    __tablename__ = "video"
    id: Mapped[str] = mapped_column(
        String, primary_key=True, unique=True, nullable=False
    )
    title: Mapped[str] = mapped_column(String)
    description: Mapped[Optional[str]] = mapped_column(String)
    thumbnail: Mapped[str] = mapped_column(String)
    published_at: Mapped[Date] = mapped_column(Date)
    # is_active: Mapped[bool] = mapped_column(default=False)

    course_id: Mapped[Optional[str]] = mapped_column(ForeignKey("course.id"))
    course: Mapped[Course] = relationship(
        back_populates="video",
    )
