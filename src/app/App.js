import React, { Component } from 'react';
import Header from './components/common/Header.js';
import NavigationBar from './components/common/NavigationBar.js';
import Collections from './components/collections/Collections.js'
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
