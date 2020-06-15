import { REGISTER_SUCCESS, REGISTER_FAIL , LOGIN_SUCCESS, SET_AUTH, LOGOUT} from './types.js'
import axios from 'axios';
import {v4 as uuidv4} from 'uuid'
import { setAlert } from './alert';

export const setAuth = authVal => async dispatch => {
    try {
        // console.log(typeof(authVal), authVal)
        dispatch({
            type: SET_AUTH,
            payload: Boolean(authVal)
        })
    } catch (err) {
        console.log(err)
    }
}

export const register =  ({name, email, password}, history) => async dispatch => {
console.log(history)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    let id=uuidv4()
    const body = JSON.stringify({id, name, email, password})

    try {
        const res = await axios.post('https://sheet.best/api/sheets/22e279e9-33ae-4692-b525-107e5db7d37b', body, config)
        // console.log(res)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data[0]
        })
        // console.log(history)
        history.push('/signin')
        // dispatch(loadUser())
    } catch (err) {
        console.log(err)
    }
}

export const login =  ({email, password}, history) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('https://sheet.best/api/sheets/22e279e9-33ae-4692-b525-107e5db7d37b', config)

        res.data.map(user => {
            // console.log(user)
            if(user.email == email && user.password == password){
                console.log('matched', user)
                localStorage.setItem('isAuthenticated', true)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data[0]
                })
                history.push('/')
            }                
        })
        if(history.location.pathname == '/signin'){
            return dispatch(setAlert('Invalid credentials', 'danger'))
        }
        
    } catch (err) {
        console.log(err)
    }
}

export const logout =  () => async dispatch => {

    localStorage.removeItem('isAuthenticated')
    try {
        dispatch({
            type: LOGOUT,
            payload: false
        })
    } catch (err) {
        console.log(err)
    }
}