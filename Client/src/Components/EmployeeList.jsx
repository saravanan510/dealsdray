import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const employeesResponse = await axios.get(
          "http://localhost:5000/employees-list"
        );
        setEmployees(employeesResponse.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    })();
  }, [employees]);

  const handleEdit = async (id) => {
    navigate(`/home/edit-employee/${id}`);
  };

  const handleDelete = async (id) => {
    const deleteEmployee = await axios.delete(
      `http://localhost:5000/employee/delete/${id}`
    );
    const newArr = employees.filter((employee) => {
      return employee._id != deleteEmployee._id;
    });
    setEmployees(newArr);
  };
  return (
    <div className="employee-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Employee List</h3>

        <button>
          <Link to="/home/create-employee">Create Employee</Link>
        </button>
      </div>
      {employees && employees.length > 0 ? (
        <div style={{ marginTop: "20px" }}>
          <table>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Create Date</th>
              <th>Action</th>
            </tr>
            {employees &&
              employees.map((employee, i) => {
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{employee.avatar}</td>
                    <td>{employee.name}</td>
                    <td>{employee.mobile}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.course}</td>
                    <td>{employee.createdAt}</td>
                    <td style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => {
                          handleEdit(employee._id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(employee._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      ) : (
        <p
          style={{
            width: "fit-content",
            marginInline: "auto",
            marginTop: "100px",
          }}
        >
          No results found
        </p>
      )}
    </div>
  );
};

export default EmployeeList;
