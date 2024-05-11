const Admin = require("../model/admin-model");
const { validationResult } = require("express-validator");
const adminController = {};

adminController.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const admin = await Admin.findOne({ username: req.body.username });
    if (admin) {
      if (admin.password.includes(req.body.password)) {
        return res.json(admin);
      } else {
        return res.status(400).json({ errors: "invalid username/password" });
      }
    } else {
      return res.status(400).json({ errors: "invalid username/password" });
    }
  } catch (err) {
    return res.status(500).json({ errors: "something went wrong" });
  }
};

adminController.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const admin = await Admin.create(req.body);
    res.json(admin);
  } catch (err) {
    return res.status(500).json({ errors: "something went wrong" });
  }
};
module.exports = adminController;
