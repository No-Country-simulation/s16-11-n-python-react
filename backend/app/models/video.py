from typing import TYPE_CHECKING, Optional
from core.database import Base
from sqlalchemy import Date, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.course import Course
else:
    Course = "Course"


class Video(Base):
    __tablename__ = "video"
    id: Mapped[int] = mapped_column(primary_key=True)
    tittle: Mapped[str]
    description: Mapped[Optional[str]]
    thumbnail: Mapped[str]
    published_ad: Mapped[Date] = mapped_column(Date)
    check: Mapped[bool] = mapped_column(default=False)
    is_active: Mapped[bool] = mapped_column(default=False)

    course_id: Mapped[int] = mapped_column(ForeignKey("course.id"))
    course: Mapped[Course] = relationship(
        back_populates="course",
    )
