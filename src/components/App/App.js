import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Characters from "../Characters/Characters";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Hero from "../Hero/Hero";
import More from "../More/More";
import Footer from "../Footer/Footer";
import SearchBox from "../SearchBox/SearchBox";
import { Toast } from 'bulma-toast';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); //ante estaba en false hablar con lean esto
  const [characterHero, setCharacterHero] = useState({});

  const getData = useCallback(async (from, to) => {
    try {
      setLoading(true);
      const charactersRange = Array.from(
        { length: to - from + 1 },
        (_, index) => index + 1
      ).join(",");
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${charactersRange}`
      );

      setData(response.data);

      setCharacterHero(response.data[0]);

      setLoading(false);
    } catch (error) {
      console.log("ERROR EN EL CATCH", error);
    }
  }, []);

  const getSearchedData = async (name) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );

      setData(response.data.results);

      setCharacterHero(response.data.results[0]);

      ///https://rickandmortyapi.com/api/character/?name=rick&status=alive
    } catch (error) {
      console.log("ERROR EN EL CATCH", error);
    }
  };

  useEffect(() => {
    getData(1, 14);
  }, [getData]);

  const handleCharacterHero = (character) => {
    setCharacterHero(character);
  };

  const handleSearch = (name) => {
    getSearchedData(name);
  };

  return (
    <div className="container">
      <Menu />
      <Logo />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="columns is-multiline is-mobile is-justify-content-center">
          <SearchBox handleSearch={handleSearch} />
          <Hero data={characterHero} />

          <Characters handleCharacterHero={handleCharacterHero} data={data} />
        </div>
      )}

      {/*<Toast message={'hola'} type={'is-primary'} position={'center'} closeOnClick={true} pauseOnHover={true} opacity={0.8}/>*/}
        
      <More />
      <Footer />
    </div>
  );
};

export default App;
