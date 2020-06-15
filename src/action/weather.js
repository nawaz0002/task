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
            'X-RapidAPI-Key': '22448d5b45msh658d58b2b9c2e5ap1d9391jsn6d818e63b5f9'
        }
    }
    try {
        const res = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=${city}`, config)
        console.log(res.data)
        dispatch({
            type: GET_WEATHER_DATA,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
        dispatch(setAlert('Too many request for today', 'danger'))
    }
}