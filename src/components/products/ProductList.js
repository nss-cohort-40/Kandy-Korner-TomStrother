import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import DataManager from "../../modules/DataManger";
import "../styles/style.css";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  const addNewProduct = () => {
    const newProduct = {
      id: "",
      name: "",
      price: "",
    };

    DataManager.post(newProduct).then((newProductFromDb) =>
      props.history.push(`/products/${newProductFromDb.id}/form`)
    );
  };

  const getProducts = () => {
    return DataManager.getAll("products").then((productsFromAPI) => {
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
          onClick={addNewProduct}
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
