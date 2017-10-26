import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="logo" />
        </div>
        <p className="App-intro">
          <h2>Realizado por:</h2>
          <h4>Stefanny Toro</h4>
          <h4>Diego Andres Mazo</h4>
          <h4>Daniel Marinez G</h4>
          <h4>Joan Sebastian Morales</h4>
        </p>
      </div>
    );
  }
}

export default App;
