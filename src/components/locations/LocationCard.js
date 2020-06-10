import React from "react";
import "../styles/style.css";

const LocationCard = (props) => {
  return (
    <div className="LocationCard">
      <div className="card-content">
        <h2>
          <span className="card-LocationName">
            Store Name: {props.loco.name}
          </span>
        </h2>
        <h3>Phone Number: {props.loco.phone}</h3>
        <h3>Store Address: {props.loco.address}</h3>
      </div>
    </div>
  );
};

export default LocationCard;
