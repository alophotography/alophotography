import React, { Component } from 'react';

class Collection extends Component {
  render() {
    console.log(this.props.match.params.collection);
    return (
      <div>
        <div>Collection</div>
      </div>
    );
  }
}

export default Collection;
