import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { persistedReducer } from './root-reducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor };