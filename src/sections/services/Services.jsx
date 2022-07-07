import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <card className="services-card">
        <div className="services-card-header">
          <h2>Beach Body Workouts </h2>
        </div>
      </card>
      <card className="services-card">
        <div className="services-card-header">
          <h2>Become a Beach Body Trainer </h2>
        </div>
      </card>
      <card className="services-card">
        <div className="services-card-header">
          <h2>Personal Training </h2>
        </div>
      </card>
    </div>
  );
};

export default Services;
