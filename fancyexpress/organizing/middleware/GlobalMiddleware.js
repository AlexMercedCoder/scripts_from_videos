const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const Dog = require("../models/Dog");

module.exports = (app) => {
  //////////////////////////////////////
  // Setup Middleware
  //////////////////////////////////////
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  // setup global data via req.context
  app.use((req, res, next) => {
    req.context = {
      models: { Dog },
    };
    next()
  });
  
};
