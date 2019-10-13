const express = require("express");
//Mongoose
const mongoose = require("mongoose");

//cookie
const cookieSession = require("cookie-session");
const passport = require("passport");

const bodyParser = require("body-parser");

//User Model - First
const userModel = require("./models/User");

//Passport - Second
const configPassport = require("./services/passport");

const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

//Initializing express function
const app = express();

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Middlewares are small functions which can be used to modify incoming req to our app before they are sent to route handlers
//express has no idea how to handle cookies so we install helper library cookie-session to manage cookies   in our app
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKeys]
  })
);

//Going to instruct passport that it needs to make use of cookies
app.use(passport.initialize());
app.use(passport.session());

//Route handlers
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
