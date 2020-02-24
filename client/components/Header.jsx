import React from 'react'

class Header extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
      }
    }
  
    render() {
      return (
        <React.Fragment>
          <h1 className='top-header'>
            RATE YOUR
          </h1>
          <br/>
          <h1 className='bottom-header'>
             BENNE
          </h1>
        </React.Fragment>
      )
    }
  }

export default Header