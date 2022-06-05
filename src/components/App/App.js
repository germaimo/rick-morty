import { useState, useEffect, useCallback } from 'react';
import "bulma/css/bulma.min.css";
import axios from 'axios';
import Card from '../Card/Card';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {

    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

  }, []);

  useEffect(() => { getData(); }, [getData]);

  return (
    <div className="container">
      {loading ? (
        <p>Loading..</p>
      ) : (
        <div className='columns is-desktop is-multiline'>
          {console.log(data)}
        </div>
      )}
    </div>
  );
}

export default App;
