import {createStore} from 'redux'

import {addContact} from './actions'
import reducer from './reducer'

const DEFAULT_STATE = {user: {}, contacts:[]}

const store = createStore(reducer, DEFAULT_STATE)

/*
store.dispatch(updateUser({foo:'foo'}))
store.dispatch(updateUser({bar:'bar'}))
store.dispatch(updateUser({foo:'baz'}))
  */

store.dispatch(addContact({name:'namelol', phone:'numberlol'}))
store.dispatch(addContact({name:'namelol', phone:'numberlol'}))
store.dispatch(addContact({name:'david', phone:'123132'}))

console.log(store.getState())

export default store
