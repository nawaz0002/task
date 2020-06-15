import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth.js';
import stateData from './stateData.js';
import weather from './weather.js';

export default combineReducers({
    alert,
    auth,
    stateData,
    weather
})