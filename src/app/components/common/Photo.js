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
    const {
      id,
      img,
      date,
      location,
      collection,
      camera,
      film,
      format,
      orientation
    } = this.props.data;

    const filmFormat = format !== 'polaroid' ? film + ' (' + format + ')' : '';
    let descInfo;
    if (this.props.view === 'collection') {
      descInfo = [date, location, camera, film];
    } else if (this.props.view === 'camera') {
      descInfo = [film, collection, location, date];
    }
    let description = '';

    for (let i = 0; i < descInfo.length; i++) {
      const info = descInfo[i];
      if (info && info.length !== 0) {
        description += info;
        if (i < descInfo.length - 1 &&
          (i+1 < descInfo.length && descInfo[i+1].length !== 0)) {
          description += '   //   ';
        }
      }
    }

    const orientationClass = format === 'polaroid' ? orientation : '';
    const polaroidClass = orientationClass.length !== 0 ? "polaroid " + orientationClass : 'polaroid';
    const imgClass = format === 'polaroid' ? polaroidClass : "photo";

    return (
      <div
        className="photo-container"
      >
        <img
          className={imgClass}
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
