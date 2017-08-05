/* globals require */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { country, total } = this.props.info
    const imgUrl = require(`../assets/flags/${country}.png`)
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="media">
            <div className="media-left">
              <img src={imgUrl} alt={country} className="media-object" />
            </div>
            <div className="media-body">
              <div className="media-heading">
                <h4 className="pull-left">{country}</h4>
                <span className="pull-right">{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  info: PropTypes.shape({
    country: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    male: PropTypes.string.isRequired,
    female: PropTypes.string.isRequired,
  }).isRequired
}

export default Card
