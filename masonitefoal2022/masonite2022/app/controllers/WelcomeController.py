"""A WelcomeController Module."""
from masonite.views import View
from masonite.controllers import Controller
from masonite.response import Response


class WelcomeController(Controller):
    """WelcomeController Controller Class."""

    def show(self, view: View):
        return view.render("welcome")
    
    def cheese(self, view: View, response: Response):
        cheese = "gouda"
        return view.render("cheese", {"cheese": cheese})
    
    def sendJson(self, response: Response):
        return response.json({"message": "it worked"})
