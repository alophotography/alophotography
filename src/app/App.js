import React, { Component } from 'react';
import Header from './common/Header.js';
import NavigationBar from './common/NavigationBar.js';
import Collections from './collections/Collections.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavigationBar />
        <Collections />
      </div>
    );
  }
}

export default App;
