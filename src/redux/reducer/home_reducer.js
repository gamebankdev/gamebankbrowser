import {
  REQUEST_TRANSACTIONS_START,
  REQUEST_TRANSACTIONS_SUCCESS,
  REQUEST_TRANSACTIONS_FAILER
} from "../../actions/home_action";
const initState = {
  transactionObj: {
    transactions: [],
    fetching: false,
    requestFailer: null
  }
};
export default (state = initState, action) => {
  let { transactionObj } = state;
  switch (action.type) {
    case REQUEST_TRANSACTIONS_START:
      transactionObj = {
        ...transactionObj,
        fetching: true,
        requestFailer: null
      };
      return { ...state, transactionObj };
    case REQUEST_TRANSACTIONS_SUCCESS:
      transactionObj = {
        ...initState,
        fetching: false,
        transactions: action.payload
      };
      return { ...state, transactionObj };
    case REQUEST_TRANSACTIONS_FAILER:
      transactionObj = {
        ...transactionObj,
        fetching: false,
        requestFailer: action.payload
      };
      return { ...state, transactionObj };
    default:
      return state;
  }
};
