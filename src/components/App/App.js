import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Characters from '../Characters/Characters';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import More from '../More/More';
import Footer from '../Footer/Footer';


const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); //ante estaba en false hablar con lean esto

  const getData = useCallback(async (from, to) => {
    try {
      setLoading(true);
      const charactersRange = Array.from(
        { length: to - from + 1 },
        (_, index) => index + 1
      ).join(',');
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${charactersRange}`
      );

      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log('ERROR EN EL CATCH', error);
    }
  }, []);

  useEffect(() => {
    getData(1, 14);
  }, [getData]);

  return (
    <div className='container'>
      <Menu />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='columns is-multiline is-mobile is-justify-content-center'>
          <Hero data={data[0]} />
          <Characters data={data} />
        </div>
      )}
      <More />
      <Footer />
    </div>
  );
};

export default App;