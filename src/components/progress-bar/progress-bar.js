import React from 'react'
import PropTypes from 'prop-types'

import BSbar from 'react-bootstrap/lib/ProgressBar'
import './progress-bar.css'

const ProgressBar = ({firstHalf, secondHalf}) => (
  <BSbar>
    <BSbar bsStyle="danger" now={firstHalf} label={`${firstHalf}%`} />
    <BSbar bsStyle="info" now={secondHalf} label={`${secondHalf}%`} />
  </BSbar>
)

ProgressBar.propTypes = {
  firstHalf: PropTypes.number.isRequired,
  secondHalf: PropTypes.number.isRequired,
}

export default ProgressBar
