import React from "react";

const Product = props => {
  return (
    <div>
      <label>{props.id}</label>
      <label>{props.name}</label>
      <button onClick={props.AddItem}>Add</button>
    </div>
  );
};

export default Product;
