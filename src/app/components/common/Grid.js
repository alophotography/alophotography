import React, { Component } from 'react';

import GridImage from './GridImage.js';
import './Grid.css';

class Grid extends Component {

  renderRows = (data) => {
    const { columns } = this.props;
    let rows = [];
    const numItems = data.length;
    const numRows = Math.ceil(numItems / columns);
    let dataIndex = 0;
    for (let i = 0; i < numRows; i++) {
      let row;
      const colDiff = columns - (numItems - dataIndex);
      if (colDiff > 0) {
        row = data.slice(dataIndex).concat([...Array(colDiff)]);
      } else {
        row = data.slice(dataIndex, dataIndex + columns);
      }
      rows.push(this.renderRow(row, i));
      dataIndex += columns;
    }
    return rows;
  }

  renderRow = (rowData, i) => {
    return (
      <div className="row align-items-center grid-row" key={i}>
        {
          rowData.map((data, i) => {
            return (
              <div className="col" key={i}>
                {(data !== undefined) &&
                  <div>
                    <a href={data.link}>
                      <GridImage
                        src={data.photos[0].img}
                        alt={data.title}
                      />
                    </a>
                    <a className="img-title" href={data.link}>{data.title}</a>
                  </div>
                }
              </div>
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderRows(this.props.data)}
      </div>
    );
  }
}

export default Grid;
