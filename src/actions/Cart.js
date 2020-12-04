import Axios from "axios"
import { GET_CART_ITEMS, ITEM_ADDED } from "./types"
import { tokenConfig } from './auth';
const cartItems = {
    items:[]
}
const url = "http://localhost:8000"


export const AddToCart = (item) =>(dispatch, getState)=>{



    Axios.post(`${url}/api/cart`, item, tokenConfig(getState) )
        .then(res=>{
            dispatch({
                type:ITEM_ADDED,
                payload:res.data
            })
        })
}

export const  GetCartItems = (item) => (dispatch, getState)=>{
    console.log(getState.authReducer, "dvndjskvhjkasvhdjskv")
    Axios.get(`${url}/api/cart` )
        .then(res=>{
            dispatch({
                type:GET_CART_ITEMS,
                payload:res.data
            })
        })
}