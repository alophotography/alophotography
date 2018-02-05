import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      rows.push(this.renderRow(row, dataIndex));
      dataIndex += columns;
    }
    return rows;
  }

  renderRow = (rowData, index) => {
    const view = this.props.view;
    return (
      <div className="row center-container grid-row" key={index}>
        {
          rowData.map((data, i) => {
            return (
              <div className="col-sm" key={i+index}>
                {(data !== undefined) &&
                  <div className="col-container">
                    <Link
                      to={`/${view}/${data.id}`}
                      className="img-title"
                    >
                      <GridImage
                        src={data.cover}
                        alt={data.title}
                      />
                    </Link>
                    <Link to={`/${view}/${data.id}`} className="img-title">
                      {data.title}
                    </Link>
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
      <div className="container grid-container">
        {this.renderRows(this.props.data)}
      </div>
    );
  }
}

export default Grid;
