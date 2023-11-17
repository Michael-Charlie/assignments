import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <button onClick={() => navigate("/products")}>Go to Products page</button>
      <button onClick={() => navigate(-1)}>Go Back 1</button>
      <button onClick={() => navigate(1)}>Go Forward 1</button>
      <button onClick={() => navigate(2)}>Go Forward 2</button>
    </div>
  );
}
