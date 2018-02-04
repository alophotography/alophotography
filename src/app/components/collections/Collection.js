import React, { Component } from 'react';

import { CollectionsData } from '../../data/CollectionsData.js';
import PhotosRow from '../common/PhotosRow.js';
import Photo from '../common/Photo.js';
import './Collection.css';

class Collection extends Component {

  constructor(props) {
    super(props);
    this.data = CollectionsData.find(data => data.id === this.props.match.params.collection);
    this.lastRenderedIndex = undefined;
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="container-fluid center-container">
        <div className="collection-title">{this.data.title}</div>
        <div className="photos-container">
          {
            this.data.photos.map((photo, i) => {
              if (i === this.lastRenderedIndex) {
                return null;
              }
              if (photo.orientation === 'portrait' && i < this.data.photos.length - 1) {
                const nextPhoto = this.data.photos[i + 1];
                if (nextPhoto.orientation === 'portrait') {
                  this.lastRenderedIndex = i + 1;
                  const photosData = [photo, nextPhoto];
                  return (
                    <PhotosRow
                      key={i}
                      data={photosData}
                    />
                  );
                }
              }
              return (
                <Photo
                  key={i}
                  data={photo}
                  view={'collection'}
                  format={photo.format}
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
