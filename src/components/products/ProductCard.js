import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const ProductCard = (props) => {
  return (
    <div className="ProductCard">
      <div className="card-content">
        <h3>
          {/* Item Name:{" "} */}
          <span className="card-productName">{props.product.name}</span>
        </h3>
        {/* <p>Price: ${props.product.price}</p> */}
      </div>
      <Link to={`/products/${props.product.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
