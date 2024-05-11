import React from "react";
import useEmployee from "../hooks/useEmployee";
const CreateEmployee = () => {
  const { form, handleChange, handleSubmit, handleImage } = useEmployee();
  return (
    <div className="form-container">
      <h3 style={{ marginBottom: "16px" }}>Create Employee</h3>
      {form.serverErrors &&
        form.serverErrors.map((err) => {
          return <p style={{ color: "red" }}>{err.msg}</p>;
        })}
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
          {form.clientErrors && (
            <p style={{ color: "red" }}>{form.clientErrors.email}</p>
          )}
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
          {form.clientErrors && (
            <p style={{ color: "red" }}>{form.clientErrors.mobile}</p>
          )}
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
          {form.clientErrors && (
            <p style={{ color: "red" }}>{form.clientErrors.designation}</p>
          )}
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
                checked={form.gender == "Male"}
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
                checked={form.gender == "Female"}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          {form.clientErrors && (
            <p style={{ color: "red" }}>{form.clientErrors.gender}</p>
          )}
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
                onChange={handleChange}
                checked={form.course == "MCA"}
              />
              <label htmlFor="MCA">MCA</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="checkbox"
                id="BCA"
                value="BCA"
                name="course"
                onChange={handleChange}
                checked={form.course == "BCA"}
              />
              <label htmlFor="BCA">BCA</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="checkbox"
                id="BSC"
                value="BSC"
                name="course"
                onChange={handleChange}
                checked={form.course == "BSC"}
              />
              <label htmlFor="BSC">BSC</label>
            </div>
          </div>
          {form.clientErrors && (
            <p style={{ color: "red" }}>{form.clientErrors.course}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="upload">Img-Upload</label>
          <input id="upload" type="file" onChange={handleImage} />
          {form.clientErrors && (
            <p style={{ color: "red" }}>{form.clientErrors.avatar}</p>
          )}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateEmployee;
