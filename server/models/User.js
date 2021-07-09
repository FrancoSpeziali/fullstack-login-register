const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({});

const User = mongoose.model("user", UserSchema, "users");

module.exports = User;
