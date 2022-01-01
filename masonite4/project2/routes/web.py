from masonite.routes import Route
from masonite.authentication import Auth

ROUTES = [Route.get("/", "WelcomeController@show"),
    Route.get("/usercheck", "WelcomeController@user"),
    Route.get("/logout", "WelcomeController@logout"),
    Route.post("/create_todo", "auth.HomeController@addTodos"),
    Route.get("/logout", "HomeController@logout")
    ]

ROUTES += Auth.routes()