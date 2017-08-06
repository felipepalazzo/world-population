import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchCountries } from '../../actions'
import Slider from '../../components/slider/slider'
import BSbutton from 'react-bootstrap/lib/Button'
import './form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {age: '18', year: '2017'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const { age, year } = this.state
    this.props.dispatch(fetchCountries(year, age))
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
    const { age, year } = this.state
    const { fetching } = this.props
    return (
      <form onSubmit={this.handleSubmit} className="rangeForm">
        <fieldset disabled={fetching}>
          <div className="form-group">
            <span className="glyphicon glyphicon-user"></span>
            <span className="pull-right">Age: <strong>{age}</strong></span>
            <Slider
              name={'age'}
              min={config.ageMin}
              max={config.ageMax}
              value={age}
              onValueChange={this.handleChange} />
          </div>
          <div className="form-group">
            <span className="glyphicon glyphicon-hourglass"></span>
            <span className="pull-right">Year: <strong>{year}</strong></span>
            <Slider
              name={'year'}
              min={config.yearMin}
              max={config.yearMax}
              value={year}
              onValueChange={this.handleChange} />
          </div>
          <BSbutton bsStyle="primary" type="submit">
            {(fetching ? 'Loading...' : 'Send')}
          </BSbutton>
        </fieldset>
      </form>
    )
  }
}

Form.propTypes = {
  fetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Form)
