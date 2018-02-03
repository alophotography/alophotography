import React, { Component } from 'react';

import { CollectionsData } from '../../data/CollectionsData.js';
import Photo from '../common/Photo.js'
import './Collection.css';

class Collection extends Component {

  constructor(props) {
    super(props);
    this.data = CollectionsData.find(data => data.id === this.props.match.params.collection);
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
              return (
                <Photo
                  key={i}
                  data={photo}
                  view={'collection'}
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
