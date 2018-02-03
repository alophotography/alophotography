import React, { Component } from 'react';

import { CamerasData } from '../../data/CamerasData.js';
import Photo from '../common/Photo.js'
import PhotosGrid from '../common/PhotosGrid.js'
import './Camera.css';

const COLUMNS = 3;

class Camera extends Component {

  constructor(props) {
    super(props);
    this.data = CamerasData.find(data => data.id === this.props.match.params.camera);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const listView = (
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
    );
    const gridView = (
      <PhotosGrid
        data={this.data.photos}
        columns={COLUMNS}
      />
    );
    return (
      <div className="container-fluid center-container">
        <div className="camera-info-container">
          <div className="camera-img-container">
            <img
              className="camera-img"
              src={this.data.cover}
              alt={this.data.title}
            />
          </div>
          <div className="camera-details-container">
            <div className="camera-title">{this.data.title}</div>
            <div className="camera-info">{this.data.info}</div>
          </div>
        </div>
        {gridView}
      </div>
    );
  }
}

export default Camera;
