import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import EmployeeList from "./Components/EmployeeList";
import CreateEmployee from "./Components/CreateEmployee";
import EditEmployee from "./Components/EditEmployee";
const Routers = () => {
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="/home" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="employee-list" element={<EmployeeList />} />
        <Route path="create-employee" element={<CreateEmployee />} />
        <Route path="edit-employee/:id" element={<EditEmployee />} />
      </Route>
    </Routes>
  );
};

export default Routers;
