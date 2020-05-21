import {all,call} from "redux-saga/effects";
import {shopSaga} from "../Redux/Shop/shopSaga";
import {userSaga} from "./User/userSaga";
import {cartSaga} from "./Cart/cartSaga";

export default function* rootSaga(){
    yield all([call(shopSaga),call(userSaga),call(cartSaga)]);
}