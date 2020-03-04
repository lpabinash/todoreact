import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"
import Background from './Background';
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles
import 'react-open-weather/lib/css/ReactWeather.css';
import Example from './Weather'
import Todo from './Todo'


function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <Background/>
      <Example />
      <Todo/>
     
    {/* <ReactWeather forecast="today" apikey="ac9589d4e20d2570510d5868d99875f2" /> */}
    </div>
  );
}

export default App;
