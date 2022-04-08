# Express Template

### By Alex Merced (AlexMercedCoder.com)

## Setup

- create new project by clicking the template button on the main github repo for this template or by running command `npx degit Alex-Merced-Templates/oop-express-template` in an empty folder
- clone the new project from github
- run `npm install` from the main folder (the one with package.json)
- rename the `template.env` file to `.env`

## Scripts

- `npm start` to run app in production mode
- `npm run dev` to run app in development mode

## Routes

Routes are broken up into two routers and two controller classes.

### MainRoutes/MainController

This is pages that render EJS templates. The routes can be registered in server.js using the MainRoutes router and the corresponding function can be defined as a method in the MainController class in the controllers folder.

### APIRoutes/APIController

The APIRoutes router handles any requests for urls starting with "/api" meant for routes that are part of JSON APIs, the corresponding function can be defined as a method in the APIController.

For both, look at the examples in the existing code.

## Views

An example EJS file making use of the head, header and footer partials already exists, you can use that to copy over to other pages.

- The head.ejs already has the /static/css/styles.css file and the /static/js/app.js files already configured along with jQuery.

Enjoy!
