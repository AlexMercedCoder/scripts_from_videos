[CoquitoJS Documentation](https://www.npmjs.com/package/coquito)

## Template Documentation

### What's setup
- RPC SERVER and CLIENT if not building a seperate frontend
- GraphQL Server and Client if not build a seperate frontend
- Template routers, rpc actions, and graphql resolvers to use as an example to build out what your app needs
- ejs is configured by default for server side rendering, use the head.ejs partial to auto-loads the rpc and graphql clients.
- Look at an example of the use of the RPC and GraphQL clients in `public/app.js` and see an example use of the ejs partial in `views/index.ejs`
- `cors.js` for defining your cors whitelist which is only used if NODE_ENV is set to `production`