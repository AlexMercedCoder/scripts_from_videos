from masonite.routes import Route
from masonite.authentication import Auth


ROUTES = [Route.get("/", "WelcomeController@show"),
    Route.get("/firstpage", "PagesController@firstpage"),
    Route.get("/firstpage/@username", "PagesController@firstpage2")]

ROUTES += Auth.routes()

ROUTES.append(Route.get("/login", "CheeseController@login"))