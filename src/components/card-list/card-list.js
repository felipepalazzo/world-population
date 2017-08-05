import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card/card'

const CardList = ({countries}) => (
  <ul>
    {countries.map((country, index) => (
      <li key={index}>
        <Card info={country} />
      </li>
    ))}
  </ul>
)

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
