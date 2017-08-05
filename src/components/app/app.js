import React, { Component } from 'react'

import Card from '../card/card'
import TopMenu from '../top-menu/top-menu'
import Form from '../form/form'

class App extends Component {
  render() {
    const info = {
      'females': 154912,
      'country': 'Afghanistan',
      'age': 0,
      'males': 139668,
      'year': 1950,
      'total': 294580
    }
    return (
      <div>
        <TopMenu />
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-2">
              <Form />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <Card info={info}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
