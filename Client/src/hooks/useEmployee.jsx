import { useState } from "react";
import _ from "lodash";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import employeeCreateValidation from "../utils/employeeCreateValidation";
const useEmployee = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
    clientErrors: null,
    serverErrors: null,
  });
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleImage = (e) => {
    setProfile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = _.pick(form, [
      "name",
      "email",
      "mobile",
      "designation",
      "gender",
      "course",
    ]);

    formData.avatar = profile;
    console.log(formData);
    const errors = employeeCreateValidation(formData);
    if (Object.keys(errors).length == 0) {
      try {
        const employee = await axios.post(
          "http://localhost:5000/employee",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(employee);
        navigate("/home/employee-list");
      } catch (err) {
        console.log(err.response.data.errors);
        setForm({
          ...form,
          serverErrors: err.response.data.errors,
          clientErrors: null,
        });
      }
    } else {
      setForm({ ...form, clientErrors: errors, serverErrors: null });
    }
  };
  return { form, handleChange, handleSubmit, handleImage };
};
export default useEmployee;
