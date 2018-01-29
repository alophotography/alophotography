import React, { Component } from 'react';

import { CamerasData } from '../../data/CamerasData.js';
import Photo from '../common/Photo.js'
import PhotosGrid from '../common/PhotosGrid.js'
import './Camera.css';

const COLUMNS = 3;

class Camera extends Component {

  constructor(props) {
    super(props);
    this.data = CamerasData[this.props.match.params.camera];
  }

  render() {
    const listView = (
      <div className="container-fluid center-container">
        <div className="camera-title">{this.data.title}</div>
        <div className="photos-container">
          {
            this.data.photos.map((photo, i) => {
              return (
                <Photo
                  key={i}
                  data={photo}
                  view={'camera'}
                />
              )
            })
          }
        </div>
      </div>
    );
    const gridView = (
      <PhotosGrid
        data={this.data.photos}
        columns={COLUMNS}
      />
    );
    return gridView;
  }
}

export default Camera;
