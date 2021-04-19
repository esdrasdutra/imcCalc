import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout'


class App extends Component{
  render(){
    return(
      <CustomLayout>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </CustomLayout>
    )
  }
}

export default App;


