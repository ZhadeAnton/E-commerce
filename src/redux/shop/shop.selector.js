import { createSelector } from 'reselect'

const selectShop = state => state.shop

const selectShopCollections = createSelector(
  [selectShop],
  item => item.shopItems
)

export default selectShopCollections