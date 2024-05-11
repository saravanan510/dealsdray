const mongoose = require("mongoose");
const connectiondb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dealsdray");
    console.log("connected to db");
  } catch (err) {
    console.log("connection error", err);
  }
};

module.exports = connectiondb;
