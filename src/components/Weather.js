import React, {useEffect, useState} from 'react'
import img from '../images/1.jpg'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getWeatherData } from './../action/weather';

const Weather = ({getWeatherData, data, auth: {isAuthenticated, loading}, history}) => {

    useEffect(() => {
        getWeatherData('pune')
        if(!loading && !isAuthenticated){
            history.push('/signin')
        }
    }, [isAuthenticated])

    const selectHandler = (e) => {
        getWeatherData(e.target.value)
    }

    return (
        <div className="weather-main-container">
            {/* <div className="country-select"> */}
                <select name="weather" id="" onChange={selectHandler} className="customer-select">
                    <option value="">Select city</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="delhi">Delhi</option>
                    <option value="pune">Pune</option>
                    <option value="agra">Agra</option>
                    <option value="kerala">Kerala</option>
                    <option value="ranchi">Ranchi</option>
                </select>
            {/* </div> */}
            {
                <div className="date-place">
                    <p>{new Date().toDateString()}</p>
                    <div className="weather-place">{data && data.list[0].name}</div>
                </div>
            }

            <div className="weather-details">
                <div className="degree">
                    <h4>{data && (data.list[0].main.temp - 273).toFixed(2) + ' C'}</h4>
                    <p>Feels like {data && (data.list[0].main.feels_like - 273).toFixed(2) + ' C'}</p>
                </div>
                <div className="rain">
                    <p>Rain</p>
                    <h6>{data && data.list[0].rain ? data.list[0].rain['1h'] : '---'}</h6>
                </div>
                <div className="wind">
                    <p>Wind</p>
                    <h6>{data && data.list[0].wind.speed ? data.list[0].wind.speed + ' km/h' : '---'}</h6>
                </div>
                <div className="humidity">
                    <p>Humidity</p>
                    <h6>{data && data.list[0].main.humidity ? data.list[0].main.humidity : '---'}</h6>
                </div>
                <div className="uvindex">
                    <p>UV Index</p>
                    <h6>---</h6>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.weather.weatherData,
    auth: state.auth
})

export default connect(mapStateToProps, {getWeatherData})(Weather)
