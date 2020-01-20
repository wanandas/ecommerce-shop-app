import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";

import { userSaga } from "./user/user.saga";
import { cartSagas } from "./cart/cart.sagas";
import { shopSaga } from "./shop/shop.saga";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSaga),
    call(shopSaga),
    call(cartSagas)
  ]);
}
