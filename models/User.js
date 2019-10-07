const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema); //2 arg means trying to load sth into it
