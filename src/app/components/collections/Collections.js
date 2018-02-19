import React, { Component } from 'react';

import { CollectionsData } from '../../data/CollectionsData.js';
import Grid from '../common/Grid.js'

const COLUMNS = 3;

class Collections extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
    document.title = "ALO Photography | Collections";
  }

  componentDidUpdate() {
    document.title = "ALO Photography | Collections";
  }

  render() {
    return (
      <Grid
        data={CollectionsData}
        columns={COLUMNS}
        view={'collections'}
      />
    );
  }
}

export default Collections;
