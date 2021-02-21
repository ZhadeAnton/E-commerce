import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { persistedReducer } from './root-reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

export { store, persistor };