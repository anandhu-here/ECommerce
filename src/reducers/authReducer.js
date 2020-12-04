import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, USER_LOADED, USER_LOADING, LOGOUT_SUCCESS, REGISTER_SUCCESS } from '../actions/types';


const initialState = {
    isAuth:false,
    user:null,
    id:null,
    isloading:false,
    token:null

}

export const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isloading:true,
                token:localStorage.getItem('token')
            }
        case USER_LOADED:
            return{
                ...state,
                isAuth:true,
                isloading:false,
                user:action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuth:true,
                isloading:false,
                user:action.payload.user,
                token:action.payload.token
            }

        case AUTH_ERROR:
        case LOGIN_FAIL:
            return {
                ...state,
                isAuth:false,
                user:null,
                isloading:false,
                token:null
            }
        case LOGOUT_SUCCESS:
            return{
                ...state,
                isAuth:false,
                user:null,
                isloading:false,
                token:null
                
            }
            
            
        default:
            return{
                ...state
            }
    }

} 