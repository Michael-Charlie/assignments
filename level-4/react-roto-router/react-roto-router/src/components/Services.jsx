import React from "react";
import { Link, useNavigate } from "react-router-dom";
import serviceData from "./serviceData";

export default function Services() {
  const navigate = useNavigate();

  const services = serviceData.map((service) => (
    <h3 key={service._id}>
      <Link to={`/services/${service._id}`}>{service.name}</Link> - $
      {service.price}
    </h3>
  ));
  return (
    <div>
      <h2>Services Page</h2>
      <p>These are our services</p>
      <button onClick={() => navigate("/")}>Return home</button>
      <div>
        <h1>Services list page</h1>
        {services}
      </div>
    </div>
  );
}
