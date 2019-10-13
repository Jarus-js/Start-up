const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey); //helps to take token that we got from front-end

//login middleware
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, (req, res) => {
    stripe.charges
      .create({
        amount: 500,
        currency: "usd",
        description: "$5 for 5 credits",
        source: "tok_mastercard"
      })
      .then(() => {
        req.user.credits += 5;
        return req.user.save();
      })
      .then(user => {
        console.log("Backend user", user);
        res.json(user);
      })
      .catch(err => console.log(err));
  });
};

/*module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    console.log("body", req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: "tok_mastercard"
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};*/
