import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Products from './containers/Products/Products';
import Product from './containers/Product/Product';
import Home from './components/Home/Home';
import Calculator from './containers/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:productId" component={Product} />
          <Route path="/calculator" component={Calculator}/>
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
