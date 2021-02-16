import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

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
  cart: persistReducer(cartPersistConfig, cartReducer),
  directory: directoryReducer,
  shop: shopReducer
})

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);