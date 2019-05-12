import { combineReducers } from 'redux'

const hutsReducer = (huts=null, action) => {
  if (action.type === 'SET_HUTS') {
    return action.payload
  }
  return huts
}

export default combineReducers({
  huts: hutsReducer,
})