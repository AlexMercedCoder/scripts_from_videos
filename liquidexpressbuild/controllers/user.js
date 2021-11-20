// dependencies
const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// router
const router = express.Router();

// routes

// Signup Routes
router.get("/signup", (req, res) => {
  res.render("auth/signup.liquid", { main: true });
});

router.post("/signup", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);

  User.create(req.body)
    .then((user) => {
      res.redirect("/auth/login");
    })
    .catch((error) => {
      res.redirect(`/error?error=${error}`);
    });
});

// login Routes
router.get("/login", (req, res) => {
  res.render("auth/login.liquid", { main: true });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(async (user) => {
      console.log(user);
      if (user) {
        const result = await bcrypt.compare(password, user.password);

        if (result) {
          req.session.login = true;
          req.session.username = username;
          res.redirect("/todos");
        } else {
          res.redirect("/error?error=The%20Passwords%20Dont%20match");
        }
      } else {
        res.redirect("/error?error=That%20user%20does%20not%20exist");
      }
    })
    .catch((error) => {
      res.redirect(`/error?error=${error}`);
    });
});

// logout route
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

// export the router
module.exports = router;
