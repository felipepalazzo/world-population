/* globals require */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ProgressBar from '../progress-bar/progress-bar'
import './card.css'

class Card extends Component {
  getPercentage(value, total, digits=2) {
    return +((value/total) * 100).toFixed(digits)
  }
  render() {
    const { country, females, males, total } = this.props.info
    const imgUrl = require(`../../assets/flags/${country}.png`)
    return (
      <div className="panel panel-default card">
        <div className="panel-body">
          <div className="media">
            <div className="media-left">
              <img src={imgUrl} alt={country} className="media-object" />
            </div>
            <div className="media-body">
              <div className="media-heading clearfix">
                <h4 className="pull-left title">{country}</h4>
                <span className="pull-right">
                  population: <strong>{total}</strong>
                </span>
              </div>
            </div>
            <div>
              <ProgressBar
                firstHalf={this.getPercentage(females, total)}
                secondHalf={this.getPercentage(males, total)} />
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
    males: PropTypes.number.isRequired,
    females: PropTypes.number.isRequired,
  }).isRequired
}

export default Card
