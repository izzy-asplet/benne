import React from 'react'

import Header from './Header'
import Form from './Form'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
      </React.Fragment>
    )
  }
}
export default App