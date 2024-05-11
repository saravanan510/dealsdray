const Employee = require("../model/employee-model");
const { validationResult } = require("express-validator");
const employeeController = {};

employeeController.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const body = req.body;
    body.avatar = req.file.filename;

    const employee = await Employee.create(body);
    return res.json(employee);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: "something went wrong" });
  }
};
employeeController.show = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.json(employees);
  } catch (err) {
    return res.status(500).json({ errors: "internal server error" });
  }
};
employeeController.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const employee = await Employee.findByIdAndDelete(id);
    return res.json(employee);
  } catch (err) {
    return res.status(500).json({ errors: "something went wrong" });
  }
};
employeeController.detail = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findById(id);
    return res.json(employee);
  } catch (err) {
    return res.status(500).json({ errors: "something went wrong" });
  }
};

employeeController.update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const body = req.body;
    body.avatar = req.file.filename;
    const id = req.params.id;
    console.log(body);

    const employee = await Employee.findByIdAndUpdate(id, body, { new: true });
    return res.json(employee);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: "something went wrong" });
  }
};
module.exports = employeeController;
