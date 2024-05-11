import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import _ from "lodash";
import employeeCreateValidation from "../utils/employeeCreateValidation";

const EditEmployee = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
    avatar: "",
    clientErrors: null,
    serverErrors: null,
  });

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const employeeResponse = await axios.get(
          `http://localhost:5000/employee-edit/${id}`
        );
        setForm({
          ...form,
          name: employeeResponse.data.name,
          email: employeeResponse.data.email,
          mobile: employeeResponse.data.mobile,
          designation: employeeResponse.data.designation,
          gender: employeeResponse.data.gender,
          course: employeeResponse.data.course,
          avatar: employeeResponse.data.avatar,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
    formData.avatar = profile || form.avatar;

    const errors = employeeCreateValidation(formData);

    if (Object.keys(errors).length == 0) {
      try {
        const editResponse = await axios.put(
          `http://localhost:5000/employee-edit/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("editResponse", editResponse);
        navigate("/home/employee-list");
      } catch (err) {
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
  return (
    <div className="form-container">
      <h3 style={{ marginBottom: "16px" }}>Edit Employee</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
          {form.clientErrors && (
            <p style={{ color: "red" }}>{form.clientErrors.name}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="mobile">Mobile No</label>
          <input
            id="mobile"
            name="mobile"
            type="number"
            value={form.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="mobile">Designation</label>
          <select
            name="designation"
            value={form.designation}
            onChange={handleChange}
          >
            <option value="">Select designation</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={"Male" == form.gender}
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={"Female" == form.gender}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div>
          <label>Course</label>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="checkbox"
                id="MCA"
                value="MCA"
                name="course"
                checked={"MCA" == form.course}
                onChange={handleChange}
              />
              <label htmlFor="MCA">MCA</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="checkbox"
                id="BCA"
                value="BCA"
                name="course"
                checked={"BCA" == form.course}
                onChange={handleChange}
              />
              <label htmlFor="BCA">BCA</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="checkbox"
                id="BSC"
                value="BSC"
                name="course"
                checked={"BSC" == form.course}
                onChange={handleChange}
              />
              <label htmlFor="BSC">BSC</label>
            </div>
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="upload">Img-Upload</label>
          <input id="upload" type="file" onChange={handleImage} />
          <p>{!profile && form.avatar}</p>
        </div>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditEmployee;
