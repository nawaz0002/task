import {REGISTER_SUCCESS , REGISTER_FAIL, LOGIN_SUCCESS, SET_AUTH, LOGOUT} from '../action/types';

const initialState = {
    user: null,
    loading: true,
    isAuthenticated: null,
}

export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case SET_AUTH:
            return{
                ...state,
                isAuthenticated: payload,
                loading: false,
            }
        case LOGOUT:
            return{
                ...state,
                isAuthenticated: payload,
                loading: false,
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated: false,
                loading: false,
                user: payload
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_FAIL:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: null
            }
        default:
            return {
                ...state
            }
        }
    }
