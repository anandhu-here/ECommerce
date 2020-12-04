import { GET_PRODUCTS, GET_ITEM } from './types';
import axios from 'axios'

const url = "http://localhost:8000/"

export const GetProducts = () => (dispatch)=>{

    const config={
        headers:{
            "Content-Type":"applicaion/json"
        }
    }

    axios.get(`${url}api/products`, config)
        .then(res=>{
            dispatch({
                type:GET_PRODUCTS,
                payload:res.data
            })
        })
        .catch(error=>console.log(error))

} 
export const GetItem = (_id) => (dispatch)=>{

    const config={
        headers:{
            "Content-Type":"applicaion/json"
        }
    }
    console.log(_id, "maireeeeeeeeee")
    axios.get(`${url}api/products/${_id}`, config)
        .then(res=>{
            dispatch({
                type:GET_ITEM,
                payload:res.data
            })
        })
        .catch(error=>console.log(error))

} 