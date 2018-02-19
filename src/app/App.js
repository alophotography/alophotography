import React, { Component } from 'react';

import Banner from './components/common/Banner.js';
import NavigationBar from './components/common/NavigationBar.js';
import Main from './components/common/Main.js';
import './App.css';

class App extends Component {

  componentDidMount() {
    document.title = "ALO Photography";
  }

  render() {
    return (
      <div className="app-container">
        <Banner />
        <NavigationBar />
        <Main />
      </div>
    );
  }
}

export default App;
