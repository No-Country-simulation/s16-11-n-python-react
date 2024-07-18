from crud.abstract import BaseCrud
from models.models import MyCourses


class MyCoursesCrud(BaseCrud):
    model = MyCourses
