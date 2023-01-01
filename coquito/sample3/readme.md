## Your CoquitoJS Project

Welcome to your scaffolded CoquitoJS Project, this readme should help you understand the layout of your project. A few resources for reference:
    
- [CoquitoJS Documentation](https://www.npmjs.com/package/coquito)
- [Coquito CLI Documentation](https://www.npmjs.com/package/coquito-cli)
    
## Scripts
    
The following scripts are in your package.json
    
- **npm start** runs your server
- **npm run dev** runs your server and watches your files (requires node 18+)
- **npm run seed** for seeding your database, runs ./db/seed.js (if you added a database)
    
## Key Files
    
#### server-config.json
    
This file is used to offload some of the key arguments to the CoquitoApp constructor.
    
```js
{
        "bodyparsers": false,
        "routers": ["/dog","/cat"],
        "port": 4444,        
        "host": "0.0.0.0"
}
```
    
- If bodyparsers are true, the express json/urlecoded bodyparsers will be enabled.
- All items in the routes will array will have a router created for it when the application starts accessible at **app.pathName**.
    
Consult Coquito documentation for list of all properties passable to the CoquitoApp constructor.
    
#### Your View Engine
    
If you selected a view engine, you'll be able to write your views using that library. Below are links to the documentation for all supported templating libraries:
    
    - [EJS](https://ejs.co/)
    - [Pug](https://pugjs.org/api/getting-started.html)
    - [Handlebars (hbs)](https://handlebarsjs.com/)
    - [Liquid](https://liquidjs.com/)
    - [Nunjucks](https://mozilla.github.io/nunjucks/)
    - [Mustache](https://github.com/janl/mustache.js)
    - [Twig](https://twig.symfony.com/)
    
    Refer to the sample route in server.js and the initial view in the ./views folder to see how use these templating engines in your application.
    
#### How the GraphQL API Works
    
    [GraphQL Documentation (how to write resolvers and functions)](https://graphql.org/learn/)
    
    1. Define the functions that should handle your GraphQL queries in the ./graphql/rootValue.js file. The express req, res object will be inside the context argument of the graphql resolver.
    
    2. Define your API's schema in ./graphql/schema.js
    
    The api is accessed by making post requests to /graphql with a json body with a query property that is your graphql query string. GraphQL clients should automatically do this, you'll just have to provide the client the url and the query string. (Popular Javascript clients include Apollo and Relay)
    
    [GraphQL Bin - Great Tool for Testing your GraphQL API](https://www.graphqlbin.com/v2/new)
    
    If you need to register any middleware specifically on the /graphql router pass a function under the gqlhook property in the CoquitoApp constructor. The function takes the router as an argument and in the function you can do whatever you like with it (mainly regiser middleware).
    
    #### How the SimpleRPC API Works
    
    - [SimpleRPC Server Library](https://www.npmjs.com/package/@alexmerced/simplerpc-server)
    - [SimpleRPC Client Library](https://www.npmjs.com/package/@alexmerced/simplerpc-client)
    
    The functions that can be called are all defined in ./rpc/actions.js, these functions get two arguments.
    
    - payload (data that is passed from the client dispatch call)
    - context (includes data in ./rpc/context.js plus the express req/res objects)
    
    These functions are called by making post requests to /rpc with a request body following this shape:
    
    ```json
    {
        "type":"functionName",
        "payload":{
            "arg1": "something",
            "arg2": "something else"
        }
    }
    ```
    
    Type is used to determine which function is called, and the payload object is passed to it. There is a javascript frontend client
    
    If you need to register any middleware specifically on the /rpc router pass a function under the rpchook property in the CoquitoApp constructor. The function takes the router as an argument and in the function you can do whatever you like with it (mainly regiser middleware).
    
    ##### Database

    - [Mongoose (Mongo ODM)](https://mongoosejs.com/)
    - [Sequelize (RDBMS ORM)](https://sequelize.org/)
    
    If you selected to have a database in your app you'll get the following files:
    
    - ./db/connection.js the code that establishes a connection to the database
    - ./db/seed.js a file for running arbitrary code mainly to seed your database by importing your models and running any code you like. Run this file with the command **npm run seed**
    
    Make sure to pass the database url in your .env file under DATABASE_URL.
    
    Some example URL strings:
    
    - mongo: mongodb://127.0.0.1:27017/databasename
    - postgres: postgres://username:password@localhost:5432/databasename
    - sqlite3: sqlite:database.db
    
    If you had listed models in your scaffold.js, those files should now exist in the ./models folder, you now just have to define their schema and they should be good to go. If you didn't or need additional models use the following commands.
    
    - coquito add-mongo-model modelName
    - coquito add-sql-model modelName
    
    This will generate the model file and corresponding controller file.
    
    #### Controllers
    
    In the ./controllers file you'll find your controllers. They come as functions that take a router and register routes to that router. Any model/routers that were defined in scaffold should already be created but if you need additional router files you can use the following command:
    
    - coquito add-rest-routes name
    
    Just import the function in your server.js and pass it the router you want it to control.
    
    ```js
    controllerFunction(router)
    ```
    
    #### Auth
    
    If you scaffolded authentication you'll find a file called ./auth/functions.js and in this file you'll find many help function for building your auth.
    
    Some of it may need some customization but they should get you most of the way there regardless of whether your doing session or jwt based auth.
    
    Make sure to define SECRET in .env, it can be anything.
    
    Functions:
    
    - sessionMiddlware - This can be passed to your middleWare array in server.js to enable sessions which will be available on req.session
    
    - cookieParsingMiddleware - This also be passed your middleWare array in server.js to parse cookies and make them available in req.cookieData
    
    - createUser - This function takes an object that matches the user schema, makes a new user in the database and returns the user.
    
    - credentialsCheck - This function takes in the username and password and will return the loggedIn user object or an error.
    
    - encodeUserToken - This function takes the user object and returns a JWT token. Feel free to edit if you want change what data is stored in the token or the tokens expiration.
    
    - decodeUserToken - takes a token, decodes and returns payload.
    
    - checkSession - takes the request object and returns true or false if the user is loggedIn
    
    - checkAuthHeader - takes the request object and returns true or false if the user is logged in based on a bearer token. (token present and verified)
    
    - checkCookieForToken - takes the request object and check for a token cookie and returns true or false if the user is logged in (token present and verified)
    
    - authMiddleware - for protecting routes, using one of the previous "check" functions will not allow route to be seen if check fails. If using mainly graphql/rpc then you probably don't need this just use the checkFunctions directly in your actions/resolvers to conditionally run the code if user is logged In.