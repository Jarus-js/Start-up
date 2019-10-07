//Passport
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

//Keys
const keys = require("../config/keys");

//mongoose
const mongoose = require("mongoose");

const User = mongoose.model("users"); //1 arg means trying to fetch out sth from mongoose
//Take some user record from db & make unique identifying piece of information & pass it to a user as cookie
//Cookie ko lagi googleId vayera hudaina unique chainxa which is userid for all time...
passport.serializeUser((user, done) => {
  done(null, user.id); //user.id i.e id provided by mongo itself;
});

//user le post req(magda) passport le cookie pani attach garera pathai dinxa & deserialize identifies cookies & match user
//It looks like this is user 123 they are coming back to us they are already authenticated lets give them list of post
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      //param 1 i.e options for strategy
      //hey passport if anyone attempts to authenticate with string google use me i.e new GoogleStrategy
      clientID: keys.googleClientID, //Identify our app to google server
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //user will be send to this URL after user grants permission on consent screen
      proxy:true
    },
    (accessToken, refreshToken, profile, done) => {
      //param 2 i.e cb function
      // console.log("Profile:", profile);

      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (!existingUser) {
          new User({ googleId: profile.id })
            .save()
            .then(newUser => done(null, newUser));
        } else {
          done(null, existingUser);
        }
      });
    }
  )
);
