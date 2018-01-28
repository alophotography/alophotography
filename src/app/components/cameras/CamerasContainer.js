import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Cameras from './Cameras.js';
import Camera from './Camera.js';

class CamerasContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Cameras}/>
        <Route exact path='/cameras' component={Cameras}/>
        <Route path='/cameras/:camera' component={Camera}/>
      </Switch>
    );
  }
}

export default CamerasContainer;
