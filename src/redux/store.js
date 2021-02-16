import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { persistedReducer } from './root-reducer'
import logger from 'redux-logger'

const middlewares = [logger]
const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

export { store, persistor };