import React, { Component, Fragment } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/header/NavBar/navbar';
import PrivateRoute from './Privateroute/PrivateRoute'
import store from './store';
import {  Provider } from 'react-redux';
import './styles/main.css';
import Auth from './pages/Auth';
import Product from './pages/product';
import Cart from './pages/Cart';
import { loadUser } from './actions/auth';


export class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store} >
      <Fragment >
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Auth}/>
            <Route  path="/product" component={Product}/>
            <PrivateRoute  exact path="/cart" component = {Cart} />
          </Switch>
        </Router>
      </Fragment>
      </Provider>
      
    )
  }
}




export default App;
