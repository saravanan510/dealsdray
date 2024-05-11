import { useState } from "react";
import _ from "lodash";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginValidation from "../utils/loginValidation";
import { useAuth } from "../context/AuthContext";

const useLogin = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    clientErrors: null,
    serverErrors: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = _.pick(form, ["username", "password"]);
    const errors = loginValidation(formData);
    if (Object.keys(errors).length == 0) {
      try {
        const admin = await axios.post("http://localhost:5000/login", formData);
        const adminData = _.pick(admin.data, ["username", "password"]);
        localStorage.setItem("adminData", JSON.stringify(adminData));
        handleLogin(adminData);
        navigate("/home");
      } catch (err) {
        console.log(err);
        setForm({
          ...form,
          clientErrors: null,
          serverErrors: err.response.data,
        });
      }
    } else {
      setForm({ ...form, clientErrors: errors });
    }
  };
  return { form, handleChange, handleSubmit };
};

export default useLogin;
