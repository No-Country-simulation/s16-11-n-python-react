from crud.abstract import BaseCrud
from models.models import Video


class VideoCrud(BaseCrud):
    model = Video
