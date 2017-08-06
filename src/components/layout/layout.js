import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CardList from '../card-list/card-list'
import Form from '../form/form'

class Layout extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-2">
            <Form />
          </div>
        </div>
        <CardList countries={this.props.countries} groupBy={3} />
      </div>
    )
  }
}

Layout.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      males: PropTypes.number.isRequired,
      females: PropTypes.number.isRequired,
    }).isRequired
  )
}

const mapStateToProps = (state) => {
  const { countries, error, fetched, fetching } = state
  return {
    countries,
    fetched,
    fetching,
    error,
  }
}

export default connect(mapStateToProps)(Layout)
