import React, { Component } from 'react';

import Banner from './Banner.js';
import NavigationBar from './NavigationBar.js';

class Header extends Component {
  render() {
    return (
      <div>
        <Banner />
        <NavigationBar />
      </div>
    );
  }
}

export default Header;
