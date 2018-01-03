import React, { Component } from 'react'

class Selector extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.onSortChange(event.target.value)
  }
  render() {
    const { sortingType } = this.props
    return (
      <select
        className="form-control"
        value={sortingType}
        onChange={this.handleChange}>
        <option value="male">Male</option>
        <option value="alpha">Alphabetical</option>
        <option value="population">Population</option>
        <option value="female">Female</option>
      </select>
    )
  }
}

export default Selector
