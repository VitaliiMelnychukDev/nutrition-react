import React, {Component} from 'react';
import './App.css';
import Products from '../components/Products/Products';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    products: [
      {id: 1, name: 'Cabbage'},
      {id: 2, name: 'Potato'},
      {id: 3, name: 'Pepper'},
    ]
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
          <Products
            products={this.state.products}
            clicked={this.deleteProductHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Cockpit click={this.toggleProductsHandler}/>
        {products}
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
