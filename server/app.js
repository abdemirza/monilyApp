const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/keys").MongoURI;
const PORT = process.env.PORT;
require("dotenv").config();

app.use(cors());
// ! MongoDB config
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("DataBase connected"))
  .catch((err) => console.log(err));

// ! Passport Config
require("./config/passport")(passport);

// ! Body Parser to get data from my forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ! express session
app.use(
  session({
    secret: "funnyBone",
    resave: false,
    saveUninitialized: true,
  })
);

// ! Initialising Passport Middleware (Order is important)
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  next();
});

// !routes defined in the routes folder
app.use("/users", require("./routes/user"));

app.listen(process.env.PORT, () => {
  console.log("HTTP Server running on port " + process.env.PORT);
});
