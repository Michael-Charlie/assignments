import React from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout - 3</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste
        suscipit provident ut, minima repudiandae rerum? Rerum dicta esse ex!
      </p>
      <button onClick={() => navigate("/")}>Return to Home</button>
      <button onClick={() => navigate(-1)}>Go Back 1</button>
      <button onClick={() => navigate(-2)}>Go Back 2</button>
    </div>
  );
}
