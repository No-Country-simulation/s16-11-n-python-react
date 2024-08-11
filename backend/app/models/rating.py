from typing import TYPE_CHECKING, List, Optional
from core.database import Base
from sqlalchemy import ForeignKey, Date
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Rating(Base):
    __tablename__ = "rating"
    id: Mapped[int] = mapped_column(primary_key=True)
    start: Mapped[int]

    # Faltan agregar las relaciones
