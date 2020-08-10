import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RouteApp from './components/App';
import store from './store/';

import './index.css';
import Users from './components/Setting/index';
import Counter from './components/ContractInfo/index';
import Home from './components/Home/index';
import Login from './container/Login/Login'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RouteApp path={'/users'} component={Users} />
        <RouteApp path={'/counter'} component={Counter} />
        <RouteApp exact path={'/'} component={Home} />
        {/* <RouteApp path={'/login'} component={Login}/> */}
      </Switch>
       <Route path={'/login'} component={Login}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
