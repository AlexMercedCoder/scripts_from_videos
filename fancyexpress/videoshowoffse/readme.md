## Express Swagger Template
#### by Alex Merced of AlexMerced.com

This is an express server template for building API with swagger documentation.

- Swagger Based Routing, your swagger json double as your route definition
- Swagger documentation delivered on "/docs"
- Configuration folder
- ES6 Modules
- .env support
- Cors setup

## Writing Your Routes in Swagger

Out of the box the swagger.json file starts out like so:

```json
{
    "swagger": "2.0",
    "info": {
      "title": "My API",
      "description": "",
      "version": "1.0"
    },
    "produces": ["application/json"],
    "host": "localhost:4000",
    "basePath": "/",
    "paths": {
      "/": {
        "get": {
          "x-swagger-router-controller": "home",
          "operationId": "main",
          "tags": ["/"],
          "description": "The Main Route",
          "parameters": [],
          "responses": {}
        }
      }
    }
 }
```

The more important lines to keep in mind:

- `"basePath": "/",` all routes will be defined relative to this basepath
- `"/": {` the endpoint your defining responses for
- `"get": {` the handling of a get request to that endpoint
- `"x-swagger-router-controller": "home"` which controller from the controllers bundled in controllers/index.js to look at
- `"operationId": "main",` within the controller which function will handle the response

Essentially just define all your other routes following this pattern and create controllers as needed.

## configs

index.js bundles all the configurations into one object you can import where needed.

- configs.env : there are your environmental variables, defined through your .env => configs/env.js
- configs.context: middleware defined in configs/context.js to create a request.context object that will be available to all your routes. Any data in the object inside this function will be available to all routes. A convenient way to deliver model objects and other broadly used data.
- configs.cors: the cors configuration object defined in configs.cors that will determine what your cors rules are applied when in production mode. (all origins are allowed when in development mode)

## Scripts

- `npm start` start the server

- `npm run dev` start the server in dev mode with nodemon