import {GET_WEATHER_DATA} from './types'
import axios from 'axios';
import { setAlert } from './alert';

export const getWeatherData = (city) => async dispatch => {
    // console.log(city)
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Max-Age': '86400',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': 'a2983e55a1msh42a1684acfbe63ep158363jsn5b9215e47340'
        }
    }

    try {
        const res = await axios.get(`https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=${city}`, config)
        // console.log(res)
        dispatch({
            type: GET_WEATHER_DATA,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
        dispatch(setAlert('Too many request for today', 'danger'))
    }
}