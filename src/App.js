import React, {useState, useEffect} from 'react';
import {Api} from './api/weatherApi';
import axios from 'axios';

const api = {
      key: 'c7616da4b68205c2f3ae73df2c31d177',
      base: 'http://api.openweathermap.org/data/2.5/'
}
function App() {

  const [city, setCity] = useState('');
  const [msg, setMsg] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter') {
      axios.get(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
      .then(res => {
        setWeather(res.data);
        setCity('')
        console.log(res);
      }).catch(
        setCity(''),
        setMsg('incorrect location')
      );
    }
  }

  const format_date = (d) => {
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

  };


  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            plaseholder='Search...'
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{format_date(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp)}°c
              </div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (<div className='invalid'>{msg}</div>)}
      </main>
      
    </div>
  )
}

export default App;

