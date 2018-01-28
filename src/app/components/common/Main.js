import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import CollectionsContainer from '../collections/CollectionsContainer.js'
import CamerasContainer from '../cameras/CamerasContainer.js'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={CollectionsContainer}/>
          <Route path='/collections' component={CollectionsContainer}/>
          <Route path='/cameras' component={CamerasContainer}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
