from typing import TYPE_CHECKING, List, Optional
from core.database import Base
from sqlalchemy import ForeignKey, Date
from sqlalchemy.orm import Mapped, mapped_column, relationship


class MyCourses(Base):
    __tablename__ = "my_courses"
    id: Mapped[int] = mapped_column(primary_key=True)
    comment: Mapped[str]
    published_ad: Mapped[Date] = mapped_column(Date)
    is_active: Mapped[Optional[bool]] = mapped_column(default=True)
