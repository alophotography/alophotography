import React, { Component } from 'react';
import './NavigationBar.css';

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.navBarOptions = [
      {title: 'collections', link: ''}, // expose or look
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
                    <a className="nav-link" href={option.link}>{option.title}</a>
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
