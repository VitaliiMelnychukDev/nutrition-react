import React, { Component } from 'react';
import './App.css';
import Product from './Product/Product';

class App extends Component {
  state  = {
    products: [
      { id: 1, name: 'Cabbage' },
      { id: 2, name: 'Potato' },
      { id: 3, name: 'Pepper' },
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      products: [
        { id: 1, name: newName },
        { id: 2, name: 'Potato' },
        { id: 3, name: 'Pepper' },
      ],
      showProducts: 1
    });
  };

  nameChangedHandler = (event, id) => {
    console.log(id);
    const productIndex = this.state.products.findIndex((product) => {
      return product.id === id;
    });

    const product = {...this.state.products[productIndex]};
    product.name = event.target.value;
    const products = [...this.state.products];
    products[productIndex] = product;

    this.setState({
      products: products
    });
  };

  deleteProductHandler = (index) => {
    const products = [...this.state.products];
    products.splice(index, 1);
    this.setState({products: products});
  };

  toggleProductsHandler = () => {
    const show = this.state.showProducts;
    this.setState({
      showProducts: !show
    });
  };

  render() {
    let products = null;
    if (this.state.showProducts) {
      products = (
        <div>
          {this.state.products.map((product, index) => {
             return <Product
              name={product.name}
              click={() => this.deleteProductHandler(index)}
              changed={(event) => this.nameChangedHandler(event, product.id)}
              key={index}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <button onClick={this.toggleProductsHandler}>Products lists: </button>
        {products}
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
