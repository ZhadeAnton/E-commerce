import ShopActiontypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActiontypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }

    case ShopActiontypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }

    case ShopActiontypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      }

    default:
      return state;
  }
}

export default shopReducer