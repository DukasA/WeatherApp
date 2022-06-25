import React, { useEffect, useState } from 'react';
import Converter from './components/Converter';
import Copyright from './components/Copyright';
import Header from './components/Header';
import { fetchData } from './http/fetchExchanges';

function App() {

  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetchData().then(response =>  setRates(response.rates));
  }, [])

  return (
    <div className='app'>
      <div className='main'>
        <Header rates={rates} />
        <div className='container'>
          <Converter rates={rates} />
        </div>
        <Copyright/>
      </div>
    </div>
  )
}

export default App;

