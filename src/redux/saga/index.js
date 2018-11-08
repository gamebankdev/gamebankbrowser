
import { takeLatest } from "redux-saga/effects";
import {
    REQUEST_TRANSACTIONS,
  } from "../../actions/home_action";
import watchGetPosts from './sagas'

export default function* rootSaga() {
    yield [
        takeLatest(REQUEST_TRANSACTIONS,watchGetPosts),
     ]
    
}