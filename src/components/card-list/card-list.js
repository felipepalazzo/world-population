import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Card from '../card/card'

const CardList = ({countries, groupBy}) => {
  const groupedCountries = _.chunk(countries, groupBy)
  return (
    <div>
      {groupedCountries.map((groups, index) => (
        <div key={index} className="row">
          {groups.map((country, index) => (
            <div className="col-sm-4" key={index}>
              <Card info={country} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}


CardList.propTypes = {
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

export default CardList
