const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"] //scope i.e what user permissions we want from google server
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google")); //take this code and provide profile info

  app.get("/api/current_user", (req, res) => {
    res.send(req.user); //passport automatically attach user property to req obje
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
  });
};
