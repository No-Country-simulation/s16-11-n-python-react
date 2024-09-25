from typing import TYPE_CHECKING, List, Optional
from core.database import Base
from sqlalchemy import ForeignKey, Date
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Comment(Base):
    __tablename__ = "comment"
    id: Mapped[int] = mapped_column(primary_key=True)
    comment: Mapped[str]
    published_ad: Mapped[Date] = mapped_column(Date)
    is_active: Mapped[Optional[bool]] = mapped_column(default=True)

    # Faltan agregar las relaciones
