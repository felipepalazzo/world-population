import React, { Component } from 'react'
import { connect } from 'react-redux'

import Slider from '../../components/slider/slider'
import BSbutton from 'react-bootstrap/lib/Button'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {age: '', year: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
  }
  handleChange(name, value) {
    this.setState({[name]: value})
  }
  render() {
    const config = {
      yearMin: 1950,
      yearMax: 2100,
      ageMin: 0,
      ageMax: 100,
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <Slider
            name={'age'}
            min={config.ageMin}
            max={config.ageMax}
            onValueChange={this.handleChange} />
          <Slider
            name={'year'}
            min={config.yearMin}
            max={config.yearMax}
            onValueChange={this.handleChange} />
          <BSbutton bsStyle="primary">Send</BSbutton>
        </fieldset>
      </form>
    )
  }
}

export default Form
