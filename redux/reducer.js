import {combineReducers} from 'redux'
import {UPDATE_USER, UPDATE_CONTACT, LOG_IN_SENT, LOG_IN_REJECTED, LOG_IN_SUCCESS} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) {
    return [...state, action.payload]
  }
  return state
}

const userReducer = (state = {}, action) =>  {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload)
    case UPDATE_CONTACT:
      return merge(state, {prevContact: action.payload})
    case LOG_IN_SUCCESS:
      return merge(state, {token: action.payload})
    case LOG_IN_REJECTED:
      return merge(state, {loginErr: action.payload})
    default:
      return state
  }
}

export default const reducer = combineReducers ({
  user: userReducer,
  contacts: contactReducer,
})
