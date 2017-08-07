import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Card from '../card/card'

const CardList = ({countries, groupBy}) => {
  const gridIndex = 12
  if (groupBy > gridIndex) {
    groupBy = gridIndex
  }
  const groupedCountries = _.chunk(countries, groupBy)
  const gridSize = Math.floor(gridIndex/groupBy)
  return (
    <div>
      {groupedCountries.map((groups, index) => (
        <div key={index} className="row">
          {groups.map((country, index) => (
            <div className={`col-sm-${gridSize}`} key={index}>
              <Card info={country} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

CardList.propTypes = {
  groupBy: PropTypes.number.isRequired,
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
