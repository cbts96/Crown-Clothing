import { takeLatest, all, call, put } from "redux-saga/effects";
import { ClearCart } from "../Cart/cartAction";
import actionTypes from "../User/actionTypes";

export function* clearCartStart() {
  yield put(ClearCart());
}

export function* onClearCart() {
  yield takeLatest(actionTypes.SIGNOUTSUCCESS,clearCartStart);
}

export function* cartSaga() {
  yield all([call(onClearCart)]);
}
