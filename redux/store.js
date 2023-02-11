import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {persistReduce, persistStore} from 'redux-persist'
import {addContact} from './actions'
import reducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const DEFAULT_STATE = {user: {}, contacts:[]}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

/*
const thunkMiddleware = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch)
  } else {
    next(action)
  }
} */ 

logInUser() // async returns function

store.dispatch(updateUser({foo:'foo'}))
store.dispatch(updateUser({bar:'bar'}))
store.dispatch(updateUser({foo:'baz'}))

store.dispatch(addContact({name:'namelol', phone:'numberlol'}))
store.dispatch(addContact({name:'namelol', phone:'numberlol'}))
store.dispatch(addContact({name:'david', phone:'123132'}))

console.log(store.getState())

