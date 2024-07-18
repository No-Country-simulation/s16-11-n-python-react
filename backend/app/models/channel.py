from typing import List
from core.database import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Channel(Base):
    __tablename__ = "channel"

    id: Mapped[int] = mapped_column(primary_key=True)
    channel_name: Mapped[str]
    description: Mapped[str]
    custom_url: Mapped[str] = mapped_column(unique=True)
    image: Mapped[str]
    country: Mapped[str]
    views: Mapped[int]
    subs: Mapped[int]


course: Mapped[List[Course]] = relationship(back_populates="channel", lazy="selectin")
