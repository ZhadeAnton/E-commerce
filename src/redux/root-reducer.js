import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);