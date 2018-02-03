import React, { Component } from 'react';

import { CamerasData } from '../../data/CamerasData.js';
import Grid from '../common/Grid.js'

const COLUMNS = 3;

class Cameras extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <Grid
        data={CamerasData}
        columns={COLUMNS}
        view={'cameras'}
      />
    );
  }
}

export default Cameras;
