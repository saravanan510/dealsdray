import React from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { form, handleChange, handleSubmit } = useLogin();
  return (
    <div className="form-container">
      <h3 style={{ marginBottom: "16px" }}>Login</h3>
      {form.serverErrors && (
        <p className="error-msg">{form.serverErrors.errors}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
          />
          {form.clientErrors && (
            <p className="error-msg">{form.clientErrors.username}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          {form.clientErrors && (
            <p className="error-msg">{form.clientErrors.password}</p>
          )}
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
