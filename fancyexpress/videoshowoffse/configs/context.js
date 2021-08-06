//////////////////////////////////////
// CONTEXT MIDDLEWARE
// This middleware creates a reqest.context property
// use to deliver any data you'd like available to all
// routes like models and other global data
////////////////////////////////////////
import models from "../models/index.js";

export default (req, res, next) => {
  req.context = {
    models,
  };

  next();
};
