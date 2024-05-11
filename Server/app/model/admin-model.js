const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const adminSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

const Admin = model("admin", adminSchema);

module.exports = Admin;
