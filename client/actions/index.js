 import request from 'superagent'
import { getBennes } from '../api'

export const GOT_BENNES = 'GOT_BENNES'

export function gotBennes(benne) {

  return {
    type: 'GOT_BENNES',
    benne: benne,
  }
}

export function getBennesAction() {
  return (dispatch) => {
    getBennes()
      .then(benne => {
          console.log(benne)
        
        return dispatch(gotBennes(benne))
      })
  }
}
