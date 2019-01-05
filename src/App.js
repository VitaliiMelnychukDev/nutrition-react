import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Products from './containers/Products/Products';

class App extends Component {
  render() {
    return (
      <Layout>
        <Products />
      </Layout>
    );
  }
}

export default App;
