import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as productActions from '../../store/actions/products';

class Products extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.props.onProductUploading();
    /*axios.get('http://192.168.33.10:3000/products/').then((products) => {
      console.log(products);
      this.setState({products: products.data});
    }).catch((err) => {

    });*/
  }

  render() {

    const products = this.props.products.map((product, index) => {
      return (
        <div key={index}>
          <div>Name:
            <Link to={`/products/${product._id}`}>
              {product.name}
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>Product list:</div>
        <div>
          {products}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onProductUploading: () => dispatch(productActions.product_uploading())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);