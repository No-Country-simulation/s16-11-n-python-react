from typing import List, TYPE_CHECKING, Optional

from sqlalchemy import String, Integer
from core.database import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.course import Course
else:
    Course = "Course"


class Channel(Base):
    __tablename__ = "channel"

    id: Mapped[str] = mapped_column(
        String, primary_key=True, unique=True, nullable=False
    )
    channel_name: Mapped[str] = mapped_column(String)
    description: Mapped[Optional[str]] = mapped_column(String)
    custom_url: Mapped[str] = mapped_column(unique=True)
    thumbnail: Mapped[str] = mapped_column(String)
    country: Mapped[Optional[str]] = mapped_column(String)
    views: Mapped[int] = mapped_column(Integer)
    subs: Mapped[int] = mapped_column(Integer)

    course: Mapped[List[Course]] = relationship(
        back_populates="channel", lazy="selectin"
    )
