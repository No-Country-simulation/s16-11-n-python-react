from typing import TYPE_CHECKING, List, Optional
from core.database import Base
from sqlalchemy import ForeignKey, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.user import User
    from app.models.course import Course
else:
    User = "User"
    Course = "Course"


class MyCourses(Base):
    __tablename__ = "my_courses"
    id: Mapped[int] = mapped_column(primary_key=True)
    progress: Mapped[Optional[int]] = mapped_column(default=0)
    is_active: Mapped[Optional[bool]] = mapped_column(default=True)

    user_id: Mapped[Optional[int]] = mapped_column(ForeignKey("user.id"))
    user: Mapped[User] = relationship(
        back_populates="my_courses",
        lazy="selectin",
    )
    course: Mapped[Optional[List[Course]]] = relationship(
        back_populates="my_courses", lazy="selectin"
    )

    __table_args__ = (UniqueConstraint("user_id"),)
