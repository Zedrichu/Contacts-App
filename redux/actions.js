import {login} from '../api'

// Action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const LOG_IN_SENT = 'LOG_IN_SENT'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'

// Async action creator
export const logInUser = () => async dispatch => {
  dispatch({type: LOG_IN_SENT})
  try {
    const token = await login(username, password)
    dispatch({type: LOG_IN_SUCCESS, payload: token})
  } catch (err) {
    dispatch({type: LOG_IN_REJECTED, payload: err.message})
  } 
}

// Action creators
export const updateUser = update => ({
  type: UPDATE_USER,
  payload: update,
})

export const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact,
})
