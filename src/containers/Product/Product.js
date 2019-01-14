import React from 'react';
import axios from 'axios';
import Ingridient from './Ingridient/Ingridient';

class Product extends  React.Component {
  state = {
    product: {
      name: null,
      ingrids: []
    }
  };

  componentDidMount() {
    const productId = this.props.match.params.productId;
    const url = `http://192.168.33.10:3000/products/${productId}`;

    axios.get(url).then((product) => {
      this.setState({product: product.data})
    }).catch((err) => {

    });
  }

  render() {

    let ingridients = null;

    if (this.state.product.ingrids) {
      ingridients = this.state.product.ingrids.map((ingridient) => {
        return (
          <Ingridient
            key={ingridient._id}
            name={ingridient.name}
            value={ingridient.value}
          />
        );
      });
    }

    return (
      <>
        <h1>Product Info:</h1>
        <h2>Name: {this.state.product.name}</h2>
        <h2>Ingridients: </h2>
        {ingridients}
      </>
    );
  }
}

export default Product;