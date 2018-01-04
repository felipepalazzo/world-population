import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSortingFilter } from '../../actions'

import CardList from '../../components/card-list/card-list'
import Form from '../../components/form/form'
import Selector from '../../components/selector/selector'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.onSortChange = this.onSortChange.bind(this)
  }
  onSortChange(value) {
    this.props.dispatch(setSortingFilter(value))
  }
  render () {
    const { countries, fetching, error, sortType } = this.props
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
        { countries.length <= 0 ? '' :
          <div className="row">
            <div className="col-sm-12">
              Order by:
              <Selector
                onSortChange={this.onSortChange}
                sortingType={sortType} />
            </div>
          </div>
        }
        { error &&
          <div className="alert alert-danger">
            {error ? `Erro: ${error.statusText}` : ''}
          </div>
        }
        <CardList countries={countries} groupBy={3} />
      </div>
    )
  }
}

Layout.propTypes = {
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
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

const getPercentage = country => {
  
}

const orderContries = (countries, sortType) => {
  switch (sortType) {
  case 'alpha':
    return countries
  case 'population':
    return [...countries].sort((c1, c2) => c2.total - c1.total)
  case 'male':
    return [...countries].sort((c1, c2) => c2.male - c1.female)
  case 'female':
    return [...countries].sort((c1, c2) => c2.male - c1.female)
  default:
    return countries
  }
}

const mapStateToProps = (state) => {
  const { countries, error, fetched, fetching } = state.fetchCountries
  const sortType = state.setSorting
  return {
    countries: orderContries(countries, sortType),
    sortType,
    fetched,
    fetching,
    error,
  }
}

export default connect(mapStateToProps)(Layout)
