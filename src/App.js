import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import { callbackify } from 'util';


// const API_KEY = 'API_KEY';
const city ="city"
const country="country"
class App extends React.Component {

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
  }
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App;