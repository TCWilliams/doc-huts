import axios from 'axios'
import config from '../config'

export const loadHuts = location => async dispatch => {
  const { data } = await axios.post('http://localhost:5000/huts', {})
  
  console.log('data', data)
  dispatch({
    type: 'SET_HUTS',
    payload: data
  })
}


