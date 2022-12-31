import User from "../models/User.js";
    import bcrypt from "bcryptjs";
    import jwt from "jsonwebtoken";
    import session from "express-session";
    import dotenv from "dotenv";
    
    dotenv.config(); // get .env vars
    
    // Session Middware, add to middleware array in server.js
    // https://www.npmjs.com/package/express-session
    export const sessionMiddlware = session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {},
    });
    
    // Cookie parsing middleware
    // put in middleware array in server.js
    export const cookieParsingMiddleware = (req, res, next) => {
      // grab cookie from heads
      const {
        headers: { cookie },
      } = req;
      if (cookie) {
        // constructo object from key/values
        const cookieData = cookie.split(";").reduce((res, item) => {
          const data = item.trim().split("=");
          return { ...res, [data[0]]: data[1] };
        }, {});
        req.cookieData = cookieData;
      } 
      // if no cookie, req.cookie an empty object
      else req.cookieData = {};
      next();
    };
    
    // Functions for creating a new user, use in rest/graphql/rpc actions used when signing up a user.
    // Takes an object that matches user schema and returns new user
    export const createUser = async (newUser) => {
      try {
        // hash user password
        newUser.password = await bcrypt.hash(
          newUser.password,
          await bcrypt.genSalt(10)
        );
    
        // create user
        const user = await User.create(newUser);
    
        // return user
        return user;
      } catch (error) {
        return { error };
      }
    };
    
    // This function is for checking a users credentials on login
    export const credentialsCheck = async (username, password) => {
      try {
        // get user from database
        const user = await User.findOne({ where: { username } });
        if (!user) {
          throw "User doesn't exist";
        }
        // check password for match
        if (!bcrypt.compare(password, user.password)) {
          throw "password does not match";
        }
    
        return user;
      } catch (error) {
        return { error };
      }
    };
    
    // this function can encode a token given a user object
    export const encodeUserToken = async (user) => {
      return await jwt.sign({ username: user.username, id: user.id }, process.env.SECRET, {
        expiresIn: "24h",
      });
    };
    
    // function to decode user tokens
    export const decodeUserToken = async (token) => {
      return await jwt.verify(token, process.env.SECRET);
    };
    
    // IF USING SESSION BASED AUTH
    // - add sessionMiddleware to sever.js
    // - when user logs in, add property to req.session, like req.session.loggedIn = true
    // authMiddlware should then check for the property
    // add authMiddleware to routes or routers that should be protected
    
    // IF USING TOKEN BASED AUTH
    // - Generate token on login send either via cooking or in response body (make sure to add cookie parsing middleware from this file.)
    // - Access token on each request either via cookie or authorization header
    // authMiddlware should verify token and be placed on appropriate routes/routers
    
    // use the below functions to achieve the above, each of these receive the request object
    
    export const checkSession = (req) => Boolean(req.session.loggedIn);
    
    export const checkAuthHeader = async (req) => {
      try {
        // check if auth header is present
        if (!req.headers.authorization) {
          return false;
        }
    
        // assuming headers value is "bearer <token>"
        const token = req.headers.authorization.split(" ")[1];
    
        // check if token is present
        if (!token) {
          return false;
        }
    
        // check if token is decodeable
        const payload = await decodeUserToken(token);
    
        // make payload available to routes via request object
        req.payload = payload;
    
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    };
    
    // should be passed req.cookieData if using the cookie parsin middleware included in this file.
    export const checkCookieForToken = (req) => {
        try {
    
        const token = req?.cookieData?.token
        if (!token){
            return false
        }
        // check if token is decodeable
        const payload = await decodeUserToken(token);
    
        // make payload available to routes via request object
        req.payload = payload;
        
        return true;
    } catch (error){
        console.log(error);
        return false;
    }
        
    }
    
    // the auth middleware to registered with any routes or routers that should be only accessible based on authentication
    export const authMiddleware = (req, res, next) => {
        // this can be swapped for any of the three check functions
        if(checkAuthHeader(req)){
            next()
        }
    
    
        res.json({message: "Not Logged In"})
    }