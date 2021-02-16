import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['cart']
}

const cartPersistConfig = {
  key: 'cart',
  storage: storage,
  blacklist: ['hidden']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: persistReducer(cartPersistConfig, cartReducer)
})

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);