import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import CollectionsContainer from '../collections/CollectionsContainer.js'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={CollectionsContainer}/>
          <Route path='/collections' component={CollectionsContainer}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
