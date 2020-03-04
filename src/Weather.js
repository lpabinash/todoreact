// import ReactWeather from 'react-open-weather';
// //Optional include of the default css styles
// import 'react-open-weather/lib/css/ReactWeather.css';
// <ReactWeather forecast="today" apikey="34140d96c2ad22d503d80004ffc14544" type="auto" />


import React, { Component } from 'react'
import Weather from 'simple-react-weather'

// import "./App.css"
 
class Example extends Component {
  render () {
    return (
     
      <div>
      <Weather id="dist" unit="C" city="BENGALURU" appid="ac9589d4e20d2570510d5868d99875f2" />
      </div>
     
    )
  }
}
export default Example