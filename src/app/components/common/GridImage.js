import React, { Component } from 'react';
import './GridImage.css';

class GridImage extends Component {
  render() {
    const containerClass = this.props.view === 'photos' ? 'image-container' : 'square-image-container';
    const imageClass = this.props.view === 'photos' ? 'image' : 'square-image';
    return (
      <div className={containerClass}>
        <img
          className={imageClass}
          src={this.props.src}
          alt={this.props.alt}
        />
      </div>
    );
  }
}

export default GridImage;
