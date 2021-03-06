import { call, takeLatest, put, all } from 'redux-saga/effects'
import { convertCollectionSnapshotToMap, firestore } from 'firebase/firebase.utils'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'
import ShopActiontypes from './shop.types'

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActiontypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  )
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
}