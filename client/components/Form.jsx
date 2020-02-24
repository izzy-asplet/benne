import React from 'react'


class Form extends React.Component {
    constructor () {
        super();
        this.state = {
          cafeName: '',
          rating: '',
          price: '',
          image: '',
        }

        this.handleCafeNameChange = this.handleCafeNameChange.bind(this)
        this.handleRatingChange = this.handleRatingChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleAddImageChange = this.handleAddImageChange.bind(this)

      }
      
      componentDidMount() {
          this.setState ({
              image: ''
          })
      }

      handleCafeNameChange (e) {
        this.setState({ cafeName: e.target.value })
      }
      
      handleRatingChange (e) {
        this.setState({ rating: e.target.value })
      }

      handlePriceChange (e) {
        this.setState({ price: e.target.value })
      }

      handleAddImageChange (e) {
          this.setState({ addImage: e.target.value})
      }

    //   handleSubmit(e){
    //     e.preventDefault()
    //       callDeep(this.state.url)
    //       .then(res  => res)
    //       .then(url => this.setState({psycUrl: url.output_url}))
    //     console.log(this.state.url)
    //   }
    
      render () {
        return (
          <form onSubmit={this.handleSubmit} className='form'>
          
            <label>Cafe Name: </label>
            <input type='text' name='cafeName' onChange={this.handleCafeNameChange} />
            <br/>

            <lable>Image: </lable>
            <input type='' name='addImage' onChange={this.handleAddImageChange} />
            <br/>

            <label>Price: $ </label>
            <input type='text' name='rating' onChange={this.handlePriceChange} />
            <br/>

            <label for='rating'>Rating:  
            <input  className='rating' type='number' name='rating' min='0' max='10' onChange={this.handleRatingChange} />
            /10</label>
            <br/>
            <br/>

            <button className='formButton'>submit</button>
            
          </form>
        )
      }
    }


export default Form



// class MyForm extends React.Component {
//     constructor() {
//       super();
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleSubmit(event) {
//       event.preventDefault();
//       const data = new FormData(event.target);
      
//       fetch('/api/form-submit-url', {
//         method: 'POST',
//         body: data,
//       });
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="username">Enter username</label>
//           <input id="username" name="username" type="text" />
  
//           <label htmlFor="email">Enter your email</label>
//           <input id="email" name="email" type="email" />
  
//           <label htmlFor="birthdate">Enter your birth date</label>
//           <input id="birthdate" name="birthdate" type="text" />
  
//           <button>Send data!</button>
//         </form>
//       );
//     }
//   }

