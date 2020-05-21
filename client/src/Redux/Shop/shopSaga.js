import {  call, put,takeLatest ,all} from "redux-saga/effects";
import { actionsTypes } from "../Shop/actionTypes";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../Firebase/FirebaseUtil";
import { FetchCollectionSuccess, FetchCollectionFailure } from "./shopAction";

export function* fetchCollectionAsync() {
  yield console.log("i am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(FetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(FetchCollectionFailure(error.message));
  }

  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionMap = convertCollectionSnapshotToMap(snapshot);
  //     dispatch(FetchCollectionSuccess(collectionMap));
  //   })
  //   .catch((error) => dispatch(FetchCollectionFailure(error.message)));
}

export function* fetchCollectionStart() {
  yield takeLatest(actionsTypes.FETCHCOLLECTIONSSTARTS, fetchCollectionAsync);
}

export function* shopSaga(){
  yield all([call(fetchCollectionStart)])
}