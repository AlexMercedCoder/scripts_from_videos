from masonite.routes import Route

ROUTES = [
    Route.get("/", "WelcomeController@show"),
    Route.get("/cheese", "WelcomeController@cheese"),
    Route.get("/json", "WelcomeController@sendJson")
    ]
