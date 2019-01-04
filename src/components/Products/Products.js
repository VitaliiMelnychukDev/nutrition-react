import React from 'react';
import Product from "./Product/Product";

const products = (props) => (
  props.products.map((product, index) => {
    return <Product
      name={product.name}
      click={() => props.clicked(index)}
      changed={(event) => props.changed(event, product.id)}
      key={index}
    />
  })
);

export default products;