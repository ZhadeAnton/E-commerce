import { convertCollectionSnapshotToMap, firestore } from 'firebase/firebase.utils'
import ShopActiontypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActiontypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActiontypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActiontypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}