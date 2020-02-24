import React from 'react'

import Header from './Header'
import Form from './Form'

import { getBennes } from '../api/'

import Bennes from './Bennes'

class App extends React.Component {
  state = {
    bennes: [],
  }

  componentDidMount() {
    getBennes()
    .then(bennes => {
      this.setState({
        bennes: bennes
      })
    })
  }

  showBenne = (benne) => {
    this.setState({
      currentBenne: benne
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className='eggPics'>
          {this.state.bennes.map(benne => {
            return <div key={benne.id} onClick={() => this.showBenne(benne)}><Bennes bennes={benne} /></div>
          })}
        </section>
        <Form />

      </React.Fragment>
    )
  }
}

export default App