import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout'


class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <CustomLayout>
        <Routes />
      </CustomLayout>
    </BrowserRouter>

    )
  }
}

export default App;


