import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';

class Banner extends Component {

  render() {
    return (
        <div className="container">
          <div className="name-container">
              <Link className="name" to={'/'}>ANNIE LO</Link>
          </div>
          <div className="description-container">
              <Link className="description" to={'/'}>photography</Link>
          </div>
        </div>
    );
  }

}

export default Banner;
