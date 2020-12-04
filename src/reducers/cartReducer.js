import { GET_CART_ITEMS } from "../actions/types"

const initialState = {
    items : []

}



export const cartReducer = (state=initialState, action) =>{

    switch(action.type){
        case GET_CART_ITEMS:
            
            return {
                ...state,
                items:[action.payload]
            }
        default:
            return{
                ...state
            }

    }
}