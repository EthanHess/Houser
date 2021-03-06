import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/Header/Header'
import routes from './routes'; 

import axios from 'axios'; 

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {routes}
      </div>
    );
  }
}

export default App;
