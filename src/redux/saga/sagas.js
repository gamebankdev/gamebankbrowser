import { call, put, takeLatest, all } from "redux-saga/effects";
import { request_get, request_post } from "../../util/request";
import {
  request_transactions_start,
  request_transactions_success,
  request_transactions_failer
} from "../../actions/home_action";

// 获取区块数据;
export default function* getHomeTrans(action) {
  try {
    yield put(request_transactions_start());
    const data = yield call(request_get, "/blockInformation");
    let blockInfo = [];
    for (let i = 0; i < data.length; i++) {
      const { transactions,timestamp } = yield call(request_post, "/api/getBlock", [
        data[i]
      ]);
      const array = transactions.map((item, index) => {
        const { operations } = item;
        (item.transactionName = operations[0][0]),
          (item = { ...item, ...operations[0][1],timestamp,blockHeight:data[i] });
        return item;
      });
     
      blockInfo = blockInfo.concat(array);
    }
    blockInfo.sort((a,b)=>{
      return !(a.timestamp-b.timestamp)
    })
    yield put(request_transactions_success(blockInfo));
  } catch (e) {
    console.log(e);
  }
}
