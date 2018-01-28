import React, { Component } from 'react';

import { CamerasData } from '../../data/CamerasData.js';
import Photo from '../common/Photo.js'
import './Camera.css';

class Camera extends Component {

  constructor(props) {
    super(props);
    this.data = CamerasData[this.props.match.params.camera];
  }

  render() {
    return (
      <div className="container-fluid center-container">
        <div className="camera-title">{this.data.title}</div>
        <div className="photos-container">
          {
            this.data.photos.map((photo) => {
              return (
                <Photo
                  key={photo.id}
                  data={photo}
                  view={'camera'}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Camera;
