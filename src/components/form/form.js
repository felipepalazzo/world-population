import React, { Component } from 'react'
import Slider from '../slider/slider'
import BSbutton from 'react-bootstrap/lib/Button'

class Form extends Component {
  handleSubmit(event) {
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <Slider name={'age'} min={0} max={100} />
          <Slider name={'year'} min={1950} max={2100} />
          <BSbutton bsStyle="primary">Send</BSbutton>
        </fieldset>
      </form>
    )
  }
}

export default Form
