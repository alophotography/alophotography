import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Collections from './Collections.js';
import Collection from './Collection.js';

class CollectionsContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Collections}/>
        <Route exact path='/collections' component={Collections}/>
        <Route path='/collections/:collection' component={Collection}/>
      </Switch>
    );
  }
}

export default CollectionsContainer;
