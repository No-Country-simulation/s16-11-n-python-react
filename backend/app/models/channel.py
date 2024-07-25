from typing import List, TYPE_CHECKING, Optional
from core.database import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.course import Course
else:
    Course = "Course"


class Channel(Base):
    __tablename__ = "channel"

    id: Mapped[int] = mapped_column(primary_key=True)
    channel_name: Mapped[str]
    description: Mapped[Optional[str]]
    custom_url: Mapped[str] = mapped_column(unique=True)
    thumbnail: Mapped[str]
    country: Mapped[str]
    views: Mapped[Optional[int]]
    subs: Mapped[Optional[int]]

    course: Mapped[List[Course]] = relationship(
        back_populates="channel", lazy="selectin"
    )
