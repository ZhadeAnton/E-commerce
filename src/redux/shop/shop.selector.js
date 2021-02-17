import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
   hats: 1,
   sheakers: 2,
   jackets: 3,
   womens: 4,
   mans: 5
}

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  item => item.shopItems
)

export const selectCollection = collectionUrlParam => createSelector (
  [selectShopCollections],
  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)