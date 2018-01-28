import React, { Component } from 'react';

import { CollectionsData } from '../../data/CollectionsData.js';
import Photo from '../common/Photo.js'
import './Collection.css';

class Collection extends Component {

  constructor(props) {
    super(props);
    this.data = CollectionsData[this.props.match.params.collection];
  }

  render() {
    return (
      <div className="container-fluid center-container">
        <div className="collection-title">{this.data.title}</div>
        <div className="photos-container">
          {
            this.data.photos.map((photo) => {
              return (
                <Photo
                  key={photo.id}
                  data={photo}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Collection;
