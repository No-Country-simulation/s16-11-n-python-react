import sys
import os
import pandas as pd
import asyncio
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from app.models.channel import Channel


SQLALCHEMY_DATABASE_URL = (
    f"postgresql+psycopg://postgres:admin123@localhost:5432/postgres"
)

async_engine = create_async_engine(url=SQLALCHEMY_DATABASE_URL)

AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    autoflush=False,
    autocommit=False,
    future=True,
)


# Función para cargar datos
async def load_data_from_excel(file_path: str):
    df = pd.read_excel(file_path)

    # Mapeo de columnas
    column_mapping = {
        "Channel_ID": "id",
        "Channel_Name": "channel_name",
        "Channel_Description": "description",
        "Custom_URL": "custom_url",
        "Thumbnail": "thumbnail",
        "Country": "country",
        "Subs": "subs",
        "Subscribers": "views",
    }

    df.rename(columns=column_mapping, inplace=True)

    async with AsyncSessionLocal() as session:
        try:
            async with session.begin():
                for _, row in df.iterrows():
                    # Crear una instancia del modelo y asignar los valores
                    instance = Channel(
                        id=row["id"],  # Usa el ID del archivo .xlsx
                        channel_name=row["channel_name"],
                        description=row["description"],
                        custom_url=row["custom_url"],
                        thumbnail=row["thumbnail"],
                        country=row["country"],
                        subs=row["subs"],
                        views=row["views"],
                    )
                    session.merge(instance)
            await session.commit()
        except Exception as e:
            await session.rollback()
            print(f"Error cargando datos de Channel desde {file_path}: {e}")


async def main():
    file_path = r"C:\Users\Usuario\Desktop\Programacion\Proyectos\s16-11-n-python-react\backend\load_data\prueba-Channel-info.xlsx"
    asyncio.run(load_data_from_excel(file_path))


if __name__ == "__main__":
    main()
