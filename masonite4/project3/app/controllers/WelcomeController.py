"""A WelcomeController Module."""
from masonite.views import View
from masonite.controllers import Controller
from masonite.response import Response
from . import cors


class WelcomeController(Controller):
    """WelcomeController Controller Class."""

    def show(self, view: View, response: Response):
        response.header('Access-Control-Allow-Origin', "*")
        response.header("Access-Control-Allow-Methods", "*")
        response.header("Access-Control-Allow-Headers", "*")
        response.header("Access-Control-Max-Age", "3600")
        return {"Hello": "World"}
