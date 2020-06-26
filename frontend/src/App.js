import React from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import history from './history';
import PrivateRoute from './Components/PrivateRoute'
import store from './Store'
import * as actions from './Pages/Products/products.actions'

import LoginPage from './Pages/Login/LoginPage'
import ProductPage from './Pages/Products/ProductPage';

window.productActions = actions;
window.store = store;

const adm = () => (<div><h2>Área Administrativa</h2></div>)

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact={true} component={ProductPage} />
          <PrivateRoute path="/adm" component={adm} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
