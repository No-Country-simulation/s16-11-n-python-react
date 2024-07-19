from typing import List
from core.database import Base
from sqlalchemy import Date, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Course(Base):
    __tablename__ = "course"
    id: Mapped[int] = mapped_column(primary_key=True)
    tittle: Mapped[str]
    description: Mapped[str]
    published_ad: Mapped[Date] = mapped_column(Date)
    is_active: Mapped[bool] = mapped_column(default=True)

    # channel_id: Mapped[int] = mapped_column(ForeignKey("channel.id"))
    # channel: Mapped[Channel] = relationship(back_populates="channel", lazy="selectin")
