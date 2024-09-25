from abc import ABC
from typing import Any

from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio.session import AsyncSession

"""
Clase base para operaciones CRUD utilizando SQLAlchemy con sesiones asínconas
"""


class BaseCrud(ABC):
    model = None  # Model to be defined in the inherited class

    def __init__(self, session: AsyncSession):
        if not self.model:
            raise ValueError("Model must be defined in the subclass")
        self.session = session

    # Method to get a model instance by its ID
    async def get(self, model_id: int):
        try:
            statement = select(self.model).where(self.model.id == model_id)
            result = await self.session.execute(statement)
            return result.scalars().first()

        except SQLAlchemyError as e:
            raise RuntimeError(
                f"Error retrieving {self.model.__name__} with id {model_id}"
            ) from e

    # Method to get all instances of the model
    async def get_all(self):
        try:
            statement = select(self.model)
            result = await self.session.execute(statement)
            return result.scalars().all()
        except SQLAlchemyError as e:
            raise RuntimeError(
                f"Error retrieving all instances of {self.model.__name__}"
            ) from e

    # Method to get an instance where a specific attribute matches a given value
    async def get_by_attribute(self, attribute: str, value: Any):
        if hasattr(self.model, attribute):
            try:
                model_attribute = getattr(self.model, attribute)
                statement = select(self.model).where(model_attribute == value)
                result = await self.session.execute(statement)
                return result.scalars().first()
            except SQLAlchemyError as e:
                raise RuntimeError(
                    f"Error retrieving {self.model.__name__} by {attribute}={value}"
                ) from e
        else:
            raise AttributeError(
                f"Model {self.model.__name__} has no attribute {attribute}"
            )

    # Method to get all instances where a specific attribute matches a given value
    async def get_all_by_attribute(self, attribute: str, value: Any):
        if hasattr(self.model, attribute):
            try:
                model_attribute = getattr(self.model, attribute)
                statement = select(self.model).where(model_attribute == value)
                result = await self.session.execute(statement)
                return result.scalars().all()
            except SQLAlchemyError as e:
                raise RuntimeError(
                    f"Error retrieving {self.model.__name__} instances by {attribute}={value}"
                ) from e
        else:
            raise AttributeError(
                f"Model {self.model.__name__} has no attribute {attribute}"
            )

    # Method to get all instances where multiple attributes match the given values
    async def get_all_by_attributes(self, attribute_dict: dict[str, any]):
        if all(
            hasattr(self.model, attribute_key)
            for attribute_key in attribute_dict.keys()
        ):
            try:

                for attribute_key in attribute_dict:
                    model_attribute = getattr(self.model, attribute_key)
                    statement = statement.where(
                        model_attribute == attribute_dict[attribute_key]
                    )
                results = await self.session.execute(statement)
                return results.scalars().all()
            except SQLAlchemyError as e:
                raise RuntimeError(
                    f"Error retrieving {self.model.__name__} instances by attributes"
                ) from e
        else:
            missing_attrs = [
                key for key in attribute_dict.keys() if not hasattr(self.model, key)
            ]
            raise AttributeError(
                f"Model {self.model.__name__} is missing attributes: {missing_attrs}"
            )

    # Method to get an instance where multiple attributes match the given values
    async def get_by_attributes(self, attribute_dict: dict[str, any]):
        statement = select(self.model)
        if all(
            hasattr(self.model, attribute_key)
            for attribute_key in attribute_dict.keys()
        ):
            try:
                for attribute_key in attribute_dict:
                    model_attribute = getattr(self.model, attribute_key)
                    statement = statement.where(
                        model_attribute == attribute_dict[attribute_key]
                    )
                result = await self.session.execute(statement)
                return result.scalars().all()
            except SQLAlchemyError as e:
                raise RuntimeError(
                    f"Error retrieving {self.model.__name__} by attributes"
                ) from e
        else:
            missing_attrs = [
                key for key in attribute_dict.keys() if not hasattr(self.model, key)
            ]
            raise AttributeError(
                f"Model {self.model.__name__} is missing attributes: {missing_attrs}"
            )

    # Method to create a new instance
    async def create(self, data: BaseModel):
        new_instance = self.model(**data.model_dump())
        try:
            self.session.add(new_instance)
            await self.session.commit()
            await self.session.refresh(new_instance)
            return new_instance
        except SQLAlchemyError as e:
            await self.session.rollback()
            raise RuntimeError(f"Error creating {self.model.__name__}") from e

    # Method to update an instance by its ID
    async def update(self, model_id: int, data: BaseModel):
        try:
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
        except SQLAlchemyError as e:
            await self.session.rollback()
            raise RuntimeError(
                f"Error updating {self.model.__name__} with id {model_id}"
            ) from e

    # Method to delete an instance by its ID
    async def delete(self, model_id: int):
        try:

            statement = select(self.model).where(self.model.id == model_id)
            result = await self.session.execute(statement)
            instance = result.scalars().first()
            if instance:
                await self.session.delete(instance)
                await self.session.commit()

            else:
                raise ValueError(f"Instance with id {model_id} not found")
        except SQLAlchemyError as e:
            await self.session.rollback()
            raise RuntimeError(
                f"Error deleting {self.model.__name__} with id {model_id}"
            ) from e
