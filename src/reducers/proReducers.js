import { GET_ITEM, GET_PRODUCTS } from '../actions/types';

const initialState = { 
     bestOffers:[]

}

export const proReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                bestOffers:action.payload
            }
        
        default:
            return {
                ...state
            }
    }
 }