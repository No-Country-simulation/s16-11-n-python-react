from core.config import settings
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

# Build the PostgreSQL database URL using the environment settings.
SQLALCHEMY_DATABASE_URL = f"postgresql+psycopg://{settings['database_username']}:{settings['database_password']}@{settings['database_host']}:{settings['database_port']}/{settings['database_name']}"

async_engine = create_async_engine(url=SQLALCHEMY_DATABASE_URL)

# Define a local asynchronous session to interact with the database.
AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    autoflush=False,
    autocommit=False,
    future=True,
)


# Defines a base class for SQLAlchemy models.
class Base(DeclarativeBase):
    pass
