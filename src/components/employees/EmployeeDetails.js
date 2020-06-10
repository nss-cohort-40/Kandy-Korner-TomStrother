import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManger";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    location: "",
    isSupervisor: "",
  });

  useEffect(() => {
    DataManager.get(props.employeeId, "employees", "?_expand=location").then(
      (employee) => {
        setEmployee({
          firstName: employee.firstName,
          lastName: employee.lastName,
          phone: employee.phone,
          address: employee.address,
          location: employee.location,
          isSupervisor: employee.isSupervisor,
        });
      }
    );
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-content">
          <h3>
            <span className="card-EmployeeName">
              Name: {employee.firstName} {employee.lastName}
            </span>
          </h3>
          <section>
            <h3>Phone Number: {employee.phone}</h3>
            <h3>Address: {employee.address}</h3>
            <h3>Store Location: {employee.location.name}</h3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
