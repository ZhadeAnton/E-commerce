import { takeLatest, put, all, call } from 'redux-saga/effects'
import { googleProvider, auth, createUserProfileDocument } from 'firebase/firebase.utils'
import UserActionTypes from './user.types'
import { googleSignInSuccess, googleSignInFailure } from './user.actions.js'

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user)
    const userSnapshot = yield userRef.get()
    yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(googleSignInFailure(error))
  }
}

export function* onGogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGogleSignInStart)])
}