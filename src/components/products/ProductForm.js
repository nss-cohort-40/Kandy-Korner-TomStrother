import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManger";

const ProductForm = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    productTypeId: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...product };
    stateToChange[evt.target.id] = evt.target.value;
    setProduct(stateToChange);
  };

  const updateExistingProduct = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedProduct = {
      id: props.match.params.productId,
      name: product.name,
      price: product.price,
      productTypeId: product.productTypeId,
      // location: product.location,
    };

    DataManager.update(editedProduct).then(() =>
      props.history.push(`/products/`)
    );
  };

  useEffect(() => {
    DataManager.get(props.match.params.productId).then((product) => {
      setProduct(product);
      setIsLoading(false);
    });
  }, [props.match.params.productId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={product.name}
            />
            <label htmlFor="name">product name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="price"
              value={product.price}
            />
            <label htmlFor="lastName">product price</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingProduct}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ProductForm;
