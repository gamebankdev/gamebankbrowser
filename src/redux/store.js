import {createStore,applyMiddleware } from "redux";
import {combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer/index";
import rootSaga from './saga/index';// 引入saga.js

const sagaMiddleware = createSagaMiddleware();
// 合并每一个reduce
console.log({...reducer})
const appReducer=combineReducers({
    ...reducer
})

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
// 进行派发stage
sagaMiddleware.run(rootSaga)  
export default store;
