import React from 'react'

import Header from './Header'
import Form from './Form'

// import { getBennes } from '../api/'
import { getBennesAction } from '../actions/index'
import { connect } from 'react-redux'

import Bennes from './Bennes'

class App extends React.Component {
  state = {
    bennes: [],
  }

  // componentDidMount() {
  //   //make action
  //   getBennes()
  //   .then(bennes => {
  //     this.setState({
  //       bennes: bennes
  //     })
  //   })
  // }

  componentDidMount () {
    this.props.dispatch(getBennesAction())
  }


  showBenne = (benne) => {
    this.setState({
      currentBenne: benne
    })
  }

  render() {
    console.log(this.props.benne)
    return (
      <React.Fragment>
        <Header />
      
        <section className='eggPics'>
          {this.props.benne.map(benne => {
            return <div key={benne.id} onClick={() => this.showBenne(benne)}><Bennes bennes={benne} /></div>
          })}
        </section>
     
        <Form />

      </React.Fragment>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    benne: reduxState.benne
  }
}

export default connect(mapStateToProps)(App) 