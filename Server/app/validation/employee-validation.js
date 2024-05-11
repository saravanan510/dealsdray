const Employee = require("../model/employee-model");
const employeeValidation = {
  name: {
    in: ["body"],
    exists: {
      errorMessage: "name is required",
    },
    notEmpty: {
      errorMessage: "name should not be empty",
    },
    trim: true,
  },
  email: {
    in: ["body"],
    exists: {
      errorMessage: "email is required",
    },
    notEmpty: {
      errorMessage: "email should not be empty",
    },
    isEmail: {
      errorMessage: "email should be valid format",
    },
    trim: true,
    normalizeEmail: true,
    custom: {
      options: async function (value) {
        const employee = await Employee.findOne({ email: value });
        if (employee) {
          throw new Error("email already registered");
        }
        return true;
      },
    },
  },
  mobile: {
    in: ["body"],
    exists: {
      errorMessage: "mobile no is required",
    },
    notEmpty: {
      errorMessage: "mobile no should not be empty",
    },
    isNumeric: {
      errorMessage: "mobile no should be number",
    },
    isLength: {
      options: {
        min: 10,
        max: 10,
      },
      errorMessage: "mobile no length should be 10",
    },
    trim: true,
  },
  designation: {
    in: ["body"],
    exists: {
      errorMessage: "designation is required",
    },
    notEmpty: {
      errorMessage: "designation should not be empty",
    },
    isIn: {
      options: [["HR", "Manager", "Sales"]],
      errorMessage: "designation should in one of three",
    },
    trim: true,
  },
  gender: {
    in: ["body"],
    exists: {
      errorMessage: "gender is required",
    },
    notEmpty: {
      errorMessage: "gender should not be empty",
    },
    isIn: {
      options: [["Male", "Female"]],
      errorMessage: "gender should be one of two",
    },
    trim: true,
  },
  course: {
    in: ["body"],
    exists: {
      errorMessage: "course is required",
    },
    notEmpty: {
      errorMessage: "course should not be empty",
    },
    isIn: {
      options: [["MCA", "BCA", "BSC"]],
      errorMessage: "course should be in one of three",
    },
    trim: true,
  },
};

const employeeEditValidation = {
  name: {
    in: ["body"],
    exists: {
      errorMessage: "name is required",
    },
    notEmpty: {
      errorMessage: "name should not be empty",
    },
    trim: true,
  },
  email: {
    in: ["body"],
    exists: {
      errorMessage: "email is required",
    },
    notEmpty: {
      errorMessage: "email should not be empty",
    },
    isEmail: {
      errorMessage: "email should be valid format",
    },
    trim: true,
    normalizeEmail: true,
  },
  mobile: {
    in: ["body"],
    exists: {
      errorMessage: "mobile no is required",
    },
    notEmpty: {
      errorMessage: "mobile no should not be empty",
    },
    isNumeric: {
      errorMessage: "mobile no should be number",
    },
    isLength: {
      options: {
        min: 10,
        max: 10,
      },
      errorMessage: "mobile no length should be 10",
    },
    trim: true,
  },
  designation: {
    in: ["body"],
    exists: {
      errorMessage: "designation is required",
    },
    notEmpty: {
      errorMessage: "designation should not be empty",
    },
    isIn: {
      options: [["HR", "Manager", "Sales"]],
      errorMessage: "designation should in one of three",
    },
    trim: true,
  },
  gender: {
    in: ["body"],
    exists: {
      errorMessage: "gender is required",
    },
    notEmpty: {
      errorMessage: "gender should not be empty",
    },
    isIn: {
      options: [["Male", "Female"]],
      errorMessage: "gender should be one of two",
    },
    trim: true,
  },
  course: {
    in: ["body"],
    exists: {
      errorMessage: "course is required",
    },
    notEmpty: {
      errorMessage: "course should not be empty",
    },
    isIn: {
      options: [["MCA", "BCA", "BSC"]],
      errorMessage: "course should be in one of three",
    },
    trim: true,
  },
};
module.exports = { employeeValidation, employeeEditValidation };
