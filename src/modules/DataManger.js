const remoteURL = "http://localhost:5002";

export default {
  get(id, resource, expand) {
    return fetch(`${remoteURL}/${resource}/${id}${expand}`).then((result) =>
      result.json()
    );
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/products/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newProduct) {
    return fetch(`${remoteURL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then((data) => data.json());
  },
  update(editedProduct) {
    return fetch(`${remoteURL}/products/${editedProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    }).then((data) => data.json());
  },
};
