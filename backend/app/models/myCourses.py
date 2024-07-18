from typing import TYPE_CHECKING, List, Optional
from core.database import Base
from sqlalchemy import ForeignKey
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
    progress: Mapped[int]
    is_active: Mapped[Optional[bool]] = mapped_column(default=True)

    # user_id: Mapped[Optional[int]] = mapped_column(ForeignKey("user.id"))
    # user: Mapped[User] = relationship(
    #     back_populates="my_courses",
    # )
    # courses: Mapped[List[Course]] = relationship(
    #     back_populates="my_courses", lazy="selectin"
    # )
