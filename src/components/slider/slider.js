import React , { Component } from 'react'
import PropTypes from 'prop-types'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.onValueChange(this.props.name, event.target.value)
  }
  render() {
    const { name, min, max } = this.props
    return (
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        onChange={this.handleChange}
      />
    )
  }
}

Slider.propTypes = {
  name:PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
}

export default Slider
