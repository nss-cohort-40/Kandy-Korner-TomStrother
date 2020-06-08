import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import DataManager from "../../modules/DataManger";
import "../styles/style.css";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return DataManager.getAll().then((productsFromAPI) => {
      setProducts(productsFromAPI);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="productListSection">
        <button
          type="button"
          className="productDetailsBtn"
          onClick={() => {
            props.history.push("/products/new");
          }}
        >
          Add Product
        </button>
      </section>
      <div className="container-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} {...props} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
