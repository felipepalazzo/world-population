import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slider extends Component {
  render() {
    const { name, min, max } = this.props
    return (
      <input
        type="range"
        name={name}
        min={min}
        max={max} />
    )
  }
}

Slider.propTypes = {
  name:PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default Slider
