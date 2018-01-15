import React, { Component } from 'react';
import './GridImage.css';

class GridImage extends Component {
  render() {
    return (
      <div className="image-container">
        <img
          className="image"
          src={this.props.src}
          alt={this.props.alt}
        />
      </div>
    );
  }
}

export default GridImage;
