import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataManager from "../../modules/DataManger";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    DataManager.delete(props.productId).then(() =>
      props.history.push("/products")
    );
  };

  useEffect(() => {
    DataManager.get(props.productId, "products", "").then((product) => {
      setProduct({
        name: product.name,
        price: product.price,
        location: product.location,
      });
      setIsLoading(false);
    });
  }, [props.productId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Item: <span>{product.name}</span>
        </h3>
        <p>Price: ${product.price}</p>
        <p>Location: {product.location}</p>
        <Link to={`/products/${props.productId}/form`}>
          <button>Edit</button>
        </Link>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
