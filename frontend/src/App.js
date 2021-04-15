import React, { Component } from 'react'
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import CustomLayout from './containers/Layout'


class App extends Component{
  render(){
    return(
      <div className="App">
        <CustomLayout/>
      </div>
    )
  }
}

export default App;
