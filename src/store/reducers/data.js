import { DATA_TYPES } from '../types'

const INITIAL_STATE = {
    corporations: null,
    activeCorp: null,
    trades: null
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case DATA_TYPES.SET_CORP:
            return {...state, corporations: action.payload, activeCorp: action.payload[0] };
        case DATA_TYPES.SET_ACTIVE:
            return {...state, activeCorp: action.payload };
        case DATA_TYPES.SET_TRADES:
            return {...state, trades: action.payload}
        default:
            return {...state};
    }
}