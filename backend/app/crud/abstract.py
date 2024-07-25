from abc import ABC
from typing import Any

from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio.session import AsyncSession


class BaseCrud(ABC):
    model = None

    def __init__(self, session: AsyncSession):
        self.session = session

    async def get(self, model_id: int):
        statement = select(self.model).where(self.model.id == model_id)
        result = await self.session.execute(statement)

        return result.scalars().first()

    async def get_all(self):
        statement = select(self.model)
        result = await self.session.execute(statement)

        return result.scalars().all()

    async def get_by_attribute(self, attribute: str, value: Any):
        if hasattr(self.model, attribute):
            model_attribute = getattr(self.model, attribute)
            statement = select(self.model).where(model_attribute == value)
            result = await self.session.execute(statement)

            return result.scalars().first()
        else:
            raise AttributeError

    # Averiguar bien que es lo que hace
    async def get_all_by_attribute(self, attribute: str, value: Any):
        if hasattr(self.model, attribute):
            model_attribute = getattr(self.model, attribute)
            statement = select(self.model).where(model_attribute == value)
            result = await self.session.execute(statement)

            return result.scalars().all()
        else:
            raise AttributeError

    # Averiguar bien que es lo que hace
    async def get_all_by_attributes(self, attribute_dict: dict[str, any]):
        if all(
            hasattr(self.model, attribute_key)
            for attribute_key in attribute_dict.keys()
        ):
            for attribute_key in attribute_dict:
                model_attribute = getattr(self.model, attribute_key)
                statement = statement.where(
                    model_attribute == attribute_dict[attribute_key]
                )
            results = await self.session.execute(statement)

            return results.scalars().all()
        else:
            raise AttributeError

    # Comparar que diferencias hay entre este y el anterior
    async def get_by_attributes(self, attribute_dict: dict[str, any]):
        statement = select(self.model)
        if all(
            hasattr(self.model, attribute_key)
            for attribute_key in attribute_dict.keys()
        ):
            for attribute_key in attribute_dict:
                model_attribute = getattr(self.model, attribute_key)
                statement = statement.where(
                    model_attribute == attribute_dict[attribute_key]
                )

            result = await self.session.execute(statement)

            return result.scalars().all()

        else:
            raise AttributeError

    async def create(self, data: BaseModel):
        new_instance = self.model(**data.model_dump())

        self.session.add(new_instance)
        await self.session.commit()
        await self.session.refresh(new_instance)

        return new_instance

    async def update(self, model_id: int, data: BaseModel):
        statement = select(self.model).where(self.model.id == model_id)

        result = await self.session.execute(statement)
        instance = result.scalars().first()

        if instance:
            for key, value in data.model_dump().items():
                setattr(instance, key, value)
            await self.session.commit()
            await self.session.refresh(instance)
            return instance
        else:
            raise ValueError(f"Instance with id {model_id} not found")

    async def delete(self, model_id: int):
        statement = select(self.model).where(self.model.id == model_id)
        result = await self.session.execute(statement)

        instance = result.scalars().first()

        if instance:
            # Comprobar como hacer la eliminación pasiva
            # await instance.is_active = False
            await self.session.delete(instance)
            await self.session.commit()

        else:
            raise ValueError(f"Instance with id {model_id} not found")
