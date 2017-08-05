import React, { Component } from 'react'
import TopMenu from './components/top-menu'
import Card from './components/card'

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
