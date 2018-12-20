import React, { Component } from 'react';
import LoginComponent from './ui/LoginComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
          <LoginComponent />
          </div>
        </header>
      </div>
    );
  }
}
export default App;
