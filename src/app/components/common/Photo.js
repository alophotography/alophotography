import React, { Component } from 'react';

import './Photo.css';

class Photo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover = () => {
    this.setState({ isHovering: true});
  }

  handleMouseLeave = () => {
    this.setState({ isHovering: false });
  }

  render() {
    const { id, img, date, location, camera, film, format } = this.props.data;

    const filmFormat = film + ' (' + format + ')';
    const descInfo = [date, location, camera, filmFormat];
    let description = '';

    for (let i = 0; i < descInfo.length; i++) {
      const info = descInfo[i];
      if (info.length !== 0) {
        description += info;
        if (i < descInfo.length - 1) {
          description += '\n';
        }
      }
    }

    return (
      <div
        className="photo-container"
      >
        <div
          className="photo-description"
          style={{ visibility: 'hidden' }}
        >
          {description}
        </div>
        <img
          className="photo"
          src={img}
          alt={id}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseLeave}
        />
        <div
          className="photo-description"
          style={{ visibility: this.state.isHovering ? 'visible' : 'hidden' }}
        >
          {description}
        </div>
      </div>
    );
  }
}

export default Photo;
