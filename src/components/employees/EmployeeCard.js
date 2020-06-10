import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const EmployeeCard = (props) => {
  return (
    <div className="EmployeeCard">
      <div className="card-content">
        <h3>
          <span className="card-EmployeeName">
            {props.employee.firstName} {props.employee.lastName}
          </span>
        </h3>
      </div>
      <Link to={`/employees/${props.employee.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default EmployeeCard;
