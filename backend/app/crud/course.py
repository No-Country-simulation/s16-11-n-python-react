from crud.abstract import BaseCrud
from models.models import Course


class CourseCrud(BaseCrud):
    model = Course
