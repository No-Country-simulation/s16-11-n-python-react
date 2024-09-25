from crud.abstract import BaseCrud
from models.models import Channel


class ChannelCrud(BaseCrud):
    model = Channel
