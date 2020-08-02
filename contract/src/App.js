import React,{useState} from 'react';
import 'antd/dist/antd.css';
import style from './App.css'
import { Route, Switch } from 'react-router-dom';
import Layout from '../src/containers/Layout'
import ContractInfo from '../src/components/ContractInfo/ContractInfo'
function App() {
  return (
    <Switch>
        <Route exact path="/" component={Layout}></Route>
      </Switch>
  );
}

export default App;
