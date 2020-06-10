import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import DataManager from "../../modules/DataManger";
import "../styles/style.css";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return DataManager.getAll("employees").then((employeesFromAPI) => {
      setEmployees(employeesFromAPI);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <section className="employeeListSection"></section>
      <div className="container-cards">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} {...props} />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
