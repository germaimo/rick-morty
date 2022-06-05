import {useState, useEffect} from 'react';
import "bulma/css/bulma.min.css";
import axios from 'axios';
import Card from '../Card/Card';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( ()=>{
    const getData = async () => {
      try{
        setLoading(true);
        const response =  await axios.get(`https://rickandmortyapi.com/api/character`);
        setData(response.data);
      }catch(error){
        console.log(error);
      }
    }
    getData();
  },[]);


  return (
    <div className="App">
              <div className="columns">
  <div className="column">
    <Card/>
  </div>
  <div className="column">
    Second column
  </div>
  <div className="column">
    Third column
  </div>
  <div className="column">
    Fourth column
  </div>
</div>
    </div>
  );
}

export default App;
