import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.navBarOptions = [
      {title: 'collections', link: '/collections'}, // expose or look
      {title: 'cameras', link: ''}, // click
      {title: 'about', link: ''}, // read
      {title: 'contact', link: ''} // contact
    ];
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-light navbar-expand-sm">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-list">
            {
              this.navBarOptions.map((option) => {
                return (
                  <li className="nav-item" key={option.title}>
                    <Link className="nav-link" to={option.link}>{option.title}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    );
  }

}

export default NavigationBar;
