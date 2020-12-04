import {combineReducers} from 'redux';
import { proReducer } from './proReducers'
import { authReducer } from './authReducer';
import { itemReducer } from './itemReducer';
import { cartReducer } from './cartReducer';
const rootReducer = combineReducers({
    proReducer,
    authReducer,
    itemReducer,
    cartReducer
    
})

export default rootReducer;