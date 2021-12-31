from masonite.controllers import Controller
from masonite.views import View
from masonite.request import Request


class PagesController(Controller):

    def __init__(self, view: View, request: Request):
        self.view = view
        self.request = request

    def firstpage(self):
        return self.view.render("firstpage", {
            "nums": [1,2,3,4,5,6]
        })

    def firstpage2(self):
        return self.view.render("firstpage", {
            "nums": [1,2,3,4,5,6],
            "query": self.request.input("cheese")
        })
