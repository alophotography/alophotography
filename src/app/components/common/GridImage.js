import React, { Component } from 'react';
import _ from 'lodash';
import './GridImage.css';

class GridImage extends Component {

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
    const containerClass = this.props.view === 'photos' ? 'image-container' : 'square-image-container';
    const imageClass = this.props.view === 'photos' ? 'image' : 'square-image';
    const overlayClass = "square-image-overlay-container " + (this.state.isHovering ? "fadeIn" : "fadeOut");
    return (
      <div
        className={containerClass}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseLeave}
      >
        <img
          className={imageClass}
          src={this.props.src}
          alt={this.props.title}
        />
        {this.props.view === 'cameras' &&
          <div
            className={overlayClass}
            style={{ visibility: this.state.isHovering ? 'visible' : 'invisible' }}
          >
            <div className="square-image-overlay">
              {!_.isNil(this.props.icon) &&
                <img
                  className="overlay-icon"
                  src={this.props.icon}
                  alt={this.props.title}
                />
              }
              <div className="overlay-title">{this.props.title}</div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default GridImage;
