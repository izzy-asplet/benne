import React from 'react'

import { saveBenne } from '../api'

class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          cafeName: '',
          image: '',
          variation: '',
          price: '',
          rating: '',
        }

        this.handleCafeNameChange = this.handleCafeNameChange.bind(this)
        this.handleAddImageChange = this.handleAddImageChange.bind(this)
        this.handleVariationChange = this.handleVariationChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleRatingChange = this.handleRatingChange.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      componentDidMount() {
          this.setState ({
            cafeName: '',
            image: '',
            variation: '',
            price: '',
            rating: '',
          })
      }

      handleCafeNameChange (e) {
        this.setState({ cafeName: e.target.value })
      }
      
      handleAddImageChange (e) {
          this.setState({ addImage: e.target.value})
      }

      handleVariationChange (e) {
        this.setState({ variation: e.target.value})
      }
      
      handlePriceChange (e) {
        this.setState({ price: e.target.value })
      }

      handleRatingChange (e) {
        this.setState({ rating: e.target.value })
      }




      handleSubmit = (e) => {
        // console.log('anything')
        e.preventDefault()
        saveBenne(this.state.benne)
        .then(() => {}
        )
      }
    
      render () {
        return (
          <form onSubmit={this.handleSubmit} className='form'>
          
            <label>Cafe Name: </label>
            <input type='text' name='cafeName' onChange={this.handleCafeNameChange} />
            <br/>

            <label>Image: </label>
            <input type='' name='addImage' onChange={this.handleAddImageChange} />
            <br/>

            <label for='variation'>Variation: </label>
            <select className='formButton' type='text' name='variation' onChange={this.handleVariationChange} > 
            <option value='bacon'>bacon</option> <option value='salmon'>salmon</option> <option value='ham'>ham</option> <option value='spinach'>spinach</option> <option value='tomato'>tomato</option> <option value='other'>other</option> </select>
            
            <br/>

            <label>Price: $ </label>
            <input type='text' name='rating' onChange={this.handlePriceChange} />
            <br/>

            <label for='rating'>Rating: </label> 
            <input  className='rating' type='number' name='rating' min='0' max='10' onChange={this.handleRatingChange} />
            /10
            <br/>
            <br/>

            <button type='submit' className='formButton'>submit</button>
            
          </form>
        )
      }
    }


export default Form