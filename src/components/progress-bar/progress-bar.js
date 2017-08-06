import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BSbar from 'react-bootstrap/lib/ProgressBar'
import './progress-bar.css'

class ProgressBar extends Component {
  setWidth (first, second) {
    if (first + second > 100) {
      return 100 - first
    }
    return second
  }
  render () {
    const {firstHalf, secondHalf} = this.props
    return (
      <BSbar>
        <BSbar
          bsStyle="danger"
          now={firstHalf}
          label={`${firstHalf}%`} />
        <BSbar
          bsStyle="info"
          now={this.setWidth(firstHalf, secondHalf)}
          label={`${secondHalf}%`} />
      </BSbar>
    )
  }
}

ProgressBar.propTypes = {
  firstHalf: PropTypes.number.isRequired,
  secondHalf: PropTypes.number.isRequired,
}

export default ProgressBar
