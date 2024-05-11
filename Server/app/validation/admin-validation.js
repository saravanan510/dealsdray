const adminValidation = {
  username: {
    in: ["body"],
    exists: {
      errorMessage: "username is required",
    },
    notEmpty: {
      errorMessage: "username should not be empty",
    },
    trim: true,
  },
  password: {
    exists: {
      errorMessage: "password is required",
    },
    notEmpty: {
      errorMessage: "password should not be empty",
    },
    isLength: {
      options: {
        min: 8,
        max: 128,
      },
      errorMessage: "password should be in 8- 128 character length",
    },
    trim: true,
  },
};

module.exports = adminValidation;
