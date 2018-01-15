import React, { Component } from 'react';

import { CollectionsData } from '../../data/CollectionsData.js';
import Grid from '../common/Grid.js'

const COLUMNS = 3;

class Collections extends Component {
  render() {
    return (
      <Grid
        data={CollectionsData}
        columns={COLUMNS}
      />
    );
  }
}

export default Collections;
