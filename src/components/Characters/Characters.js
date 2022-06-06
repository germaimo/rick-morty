import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import 'bulma/css/bulma.css';
import Cardx from '../Card/Card';
import axios from 'axios';

const Characters = () => {

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
    getData(1, 55);
    }, [getData]);


  return (
    <div className='container'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='columns is-multiline'>
          {data.map( (character, index) => <Cardx key={index} character={character} /> )}
        </div>
      )}
    </div>
  )
}

export default Characters