export const REQUEST_TRANSACTIONS_START='REQUEST_TRANSACTIONS_START'
export const REQUEST_TRANSACTIONS_SUCCESS='REQUEST_TRANSACTIONS_SUCCESS'
export const REQUEST_TRANSACTIONS_FAILER='REQUEST_TRANSACTIONS_FAILER'
export const REQUEST_TRANSACTIONS='REQUEST_TRANSACTIONS'
export const request_transactions_start=(payload)=>{
    return {
        type:REQUEST_TRANSACTIONS_START,
        payload:payload
    }
}
export const request_transactions_success=(payload)=>{
    return {
        type:REQUEST_TRANSACTIONS_SUCCESS,
        payload:payload
    }
}
export const request_transactions_failer=(payload)=>{
    return {
        type:REQUEST_TRANSACTIONS_FAILER,
        payload:payload
    }
}
export const request_transaction=(payload)=>{
    return {
        type:REQUEST_TRANSACTIONS,
        payload:payload
    }
}