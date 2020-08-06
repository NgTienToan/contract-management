import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteApp from './components/App';
import store from './store/';

import './index.css';
import Users from './components/Setting/index';
import Counter from './components/ContractInfo/ContractInfo';
import Home from './components/Home/index';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RouteApp path={'/users'} component={Users} />
        <RouteApp path={'/counter'} component={Counter} />
        <RouteApp path={'/'} component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
