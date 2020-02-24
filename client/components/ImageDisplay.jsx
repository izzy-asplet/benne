// import React from 'react'


// // import { getLostPets } from '../../apis/lostApi'

// class ImageDisplay extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         lostPets: []
//       }
//     }
  
//     componentDidMount() {
//     //   console.log(getLostPets)
//       getLostPets()
//       .then(lostPets => { 
//         this.setState({
//           lostPets: lostPets
//         })
//       })
//     }
  
//     render() {
//       return (
//         <div className = 'eggPics'>
//           {this.state.eggPic.map(eggPics => {
//             return <img src={eggPics.photo} />
//           })}
//         </div>
//       )
//     }
//   }

//   render() {
//     return (
//         <div className = 'petPics'>
//             {this.state.foundPets.map(petPics => {
//                 return <img src={petPics.photo} />
//             })}
//         </div>
//     )

// export default ImageDisplay