import ShopActiontypes from "./shop.types";

const INITIAL_STATE = {
  collections: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActiontypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collection: action.payload
      }

    default:
      return state;
  }
}

export default shopReducer