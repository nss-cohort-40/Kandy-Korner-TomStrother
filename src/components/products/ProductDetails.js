import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataManager from "../../modules/DataManger";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({ name: "", price: "" });

  useEffect(() => {
    DataManager.get(props.productId).then((product) => {
      setProduct({
        name: product.name,
        price: product.price,
      });
    });
  }, [props.productId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Item: <span>{product.name}</span>
        </h3>
        <p>Price: {product.price}</p>
        <p>Location: {product.location}</p>
        <Link to={`/products/${product.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
