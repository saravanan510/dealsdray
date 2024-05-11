const loginValidation = (value) => {
  const errors = {};
  if (value.username.trim().length == 0) {
    errors.username = "username is required";
  }
  if (value.password.trim().length == 0) {
    errors.password = "password is required";
  } else if (value.password.length < 8 || value.password.length > 128) {
    errors.password = "password length should be 8 - 128 character length ";
  }
  return errors;
};

export default loginValidation;
