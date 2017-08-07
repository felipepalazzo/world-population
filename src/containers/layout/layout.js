import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CardList from '../../components/card-list/card-list'
import Form from '../../components/form/form'

class Layout extends Component {
  render () {
    const { countries, fetching } = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <div className="well">
              <Form fetching={fetching} />
            </div>
            <div className="text-center">
              { countries.length ? '' :
                'Set age and year to get population info and gender distribution'
              }
            </div>
          </div>
        </div>
        <CardList countries={countries} groupBy={3} />
      </div>
    )
  }
}

Layout.propTypes = {
  fetching: PropTypes.bool.isRequired,
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
