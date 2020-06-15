
import {GET_WEATHER_DATA} from '../action/types';

const initialState = {
    weatherData: null,
    loading: true,
    isAuthenticated: null
}

export default function(state = initialState, action){
    // console.log(action)
    const { type, payload } = action;
    switch(type){
        case GET_WEATHER_DATA:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                weatherData: payload
            }
        default: 
        return{
            ...state
        }
}
}