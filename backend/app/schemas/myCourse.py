from pydantic import BaseModel


class MyCoursesBase(BaseModel):
    user_id: int
    progress: int | None = None


class MyCoursesCreate(MyCoursesBase):
    pass


class MyCoursesSchema(MyCoursesBase):
    id: int

    class Config:
        from_attributes = True
