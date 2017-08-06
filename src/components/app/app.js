import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardList from '../card-list/card-list'
import TopMenu from '../top-menu/top-menu'
import Form from '../form/form'

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-2">
              <Form />
            </div>
          </div>
          <CardList countries={this.props.countries} groupBy={3} />
        </div>
      </div>
    )
  }
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

export default connect(mapStateToProps)(App)
