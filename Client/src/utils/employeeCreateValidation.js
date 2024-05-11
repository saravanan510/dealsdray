import validator from "validator";
const employeeCreateValidation = (form) => {
  const errors = {};
  if (form.name.trim().length == 0) {
    errors.name = "name is required";
  }
  if (form.email.trim().length == 0) {
    errors.email = "email is required";
  } else if (!validator.isEmail(form.email)) {
    errors.email = "email should be valid format";
  }
  if (form.mobile.length == 0) {
    errors.mobile = "mobile no is required";
  } else if (form.mobile.length !== 10) {
    errors.mobile = "mobile no should be 10 digits";
  }
  if (form.designation.trim().length == 0) {
    errors.designation = "Designation is required";
  }
  if (form.gender.trim().length == 0) {
    errors.gender = "Gender is required";
  }
  if (form.course.trim().length == 0) {
    errors.course = "Course is required";
  }
  if (!form.avatar) {
    errors.avatar = "file is required";
  }
  return errors;
};

export default employeeCreateValidation;
