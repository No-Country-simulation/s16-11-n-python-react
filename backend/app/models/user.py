from typing import TYPE_CHECKING, List, Optional

from core.database import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.comment import Comment
    from app.models.myCourses import MyCourses
else:
    Comment = "Comment"
    MyCourses = "MyCourses"


class User(Base):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[Optional[str]]
    last_name: Mapped[Optional[str]]
    email: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str]
    is_admin: Mapped[Optional[bool]] = mapped_column(default=False)
    is_active: Mapped[Optional[bool]] = mapped_column(default=True)

    comment: Mapped[Comment] = relationship(back_populates="user")
    my_courses: Mapped[List[MyCourses]] = relationship(
        back_populates="user", lazy="selectin"
    )
