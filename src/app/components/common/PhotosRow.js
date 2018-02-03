import React, { Component } from 'react';
import Photo from './Photo.js'

import './PhotosRow.css';

class PhotosRow extends Component {

  renderRow = (photoData) => {
    return (
      <div className="photos-row">
        {
          photoData.map((data, i) => {
            return (
              <div className="photos-row-col" key={i}>
                {(data !== undefined) &&
                  <div>
                    <Photo
                      key={i}
                      data={data}
                      view={'collection'}
                    />
                  </div>
                }
              </div>
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className="container photos-row-container">
        {this.renderRow(this.props.data)}
      </div>
    );
  }
}

export default PhotosRow;
