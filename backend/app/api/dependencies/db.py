from typing import AsyncIterable
from sqlalchemy.ext.asyncio.session import async_sessionmaker
from core.database import AsyncSessionLocal

async def get_session()-> AsyncIterable[async_sessionmaker]:
    async with AsyncSessionLocal() as session:
        yield session