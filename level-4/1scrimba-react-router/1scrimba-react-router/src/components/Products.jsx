import React from "react";
import { Link, useNavigate } from "react-router-dom";
import productData from "./productData";

export default function Products() {
  const navigate = useNavigate();

  const products = productData.map((product) => (
    <h3 key={product._id}>
      <Link to={`/products/${product._id}`}>{product.name}</Link> - $
      {product.price}
    </h3>
  ));
  return (
    <div style={{ padding: 20 }}>
      <h2>Products - 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste
        suscipit provident ut, minima repudiandae rerum? Rerum dicta esse ex!
      </p>
      <button onClick={() => navigate("/checkout")}>Check Out</button>
      <button onClick={() => navigate("/")}>Return to Home</button>
      <button onClick={() => navigate(1)}>Go Forward 1</button>
      <button onClick={() => navigate(-1)}>Go Back 1</button>
      <div>
        <h1>Products List Page</h1>
        {products}
      </div>
    </div>
  );
}
