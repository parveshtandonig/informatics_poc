import React, { Component } from 'react'

import GridRecord from './gridRecord'

class GridContent extends Component {

  render() {

    return (
      <div className="grid--rows--container">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 8, 9, 10].map((value, index) => (
            <GridRecord />
          ))
        }
      </div>
    )

  }
}

export default GridContent