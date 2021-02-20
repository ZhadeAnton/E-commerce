const { default: ShopActiontypes } = require("./shop.types")

const updateCollection = collection => ({
  type: ShopActiontypes.UPDATE_COLLECTIONS,
  payload: collection
})

export default updateCollection