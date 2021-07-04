const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const auth = require("../config/auth");
require("dotenv").config();

router.get("/login", (req, res) => {
  res.send("Login Route");
});
router.get("/", auth, (req, res) => {
  console.log("Login Get Route");
  res.send(req.user);
});
//New User Sign up
router.post("/register", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password != confirmPassword)
    return res.json({ error: "Password Do Not Match" });
  else {
    User.findOne({ email: email }).then((user) => {
      if (user) return res.json({ error: "User already exists" });
      else {
        const newUser = new User({
          name,
          email,
          password,
        });
        newUser
          .save()
          .then((user) => {
            const token = jwt.sign({ userId: user._id }, process.env.jwtKey);
            res.send({ token });
          })
          .catch((err) => res.send(err));
      }
    });
  }
});
// ! Login Handle
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(!email);
  console.log(!password);
  if (!email || !password)
    return res.status(422).send({ error: "Must Provide Email and Password" });
  const user = await User.findOne({ email: email });
  // if (!user)
  //   return res.status(422).send({ error: "Must Provide Email and Password" });
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.jwtKey);
    res.send({ token, user });
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "Must Provide Email and Password" });
  }
});
module.exports = router;
