import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home View</h2>
      <p>Home of the plumbing company website</p>
      <button onClick={() => navigate("/services")}>Go to services page</button>
    </div>
  );
}
