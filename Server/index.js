const express = require("express");
const { checkSchema } = require("express-validator");
const cors = require("cors");
const multer = require("multer");
const app = express();

const port = 5000;

const adminValidation = require("./app/validation/admin-validation");
const {
  employeeValidation,
  employeeEditValidation,
} = require("./app/validation/employee-validation");
const adminController = require("./app/controller/adminController");
const employeeController = require("./app/controller/employeeController");

app.use(express.json());
app.use(express.static("uploads"));
app.use(cors());
const connectiondb = require("./config/db");
connectiondb();

app.post("/admin", checkSchema(adminValidation), adminController.create);
app.post("/login", checkSchema(adminValidation), adminController.login);
app.get("/employees-list", employeeController.show);
app.delete("/employee/delete/:id", employeeController.delete);
app.get("/employee-edit/:id", employeeController.detail);

// multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
});

app.post(
  "/employee",
  upload.single("avatar"),
  checkSchema(employeeValidation),
  employeeController.create
);

app.put(
  "/employee-edit/:id",
  upload.single("avatar"),
  checkSchema(employeeEditValidation),
  employeeController.update
);
app.listen(port, () => {
  console.log("server running successfully");
});
