import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import DataManager from "../../modules/DataManger";
import "../styles/style.css";

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return DataManager.getAll("locations").then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <section className="locationListSection"></section>
      <div className="container-cards">
        {locations.map((location) => (
          <LocationCard key={location.id} loco={location} {...props} />
        ))}
      </div>
    </>
  );
};

export default LocationList;
