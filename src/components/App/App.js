import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import Characters from "../Characters/Characters";
import Logo from "../Logo/Logo";
import Hero from "../Hero/Hero";
import SearchBox from "../SearchBox/SearchBox";


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); //ante estaba en false hablar con lean esto
  const [characterHero, setCharacterHero] = useState({});
  const myRef = useRef(null);

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
      const characters = response.data;
      const [firstCharacter, ...restCharacters] = characters;

      setData(restCharacters);
      setCharacterHero(firstCharacter);

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
      // TODO const characters = [1,2,3,4] const [first, ...rest] = characters  
      setData(response.data.results);

      response.data.filter((character)=> character.id !== characterHero.id);

      setCharacterHero(response.data.results[0]);

      ///https://rickandmortyapi.com/api/character/?name=rick&status=alive
    } catch (error) {
      console.log("ERROR EN EL CATCH", error);
    }
  };

  useEffect(() => {
    getData(1, 17);
  }, [getData]);

  const handleCharacterHero = (character) => {
    setCharacterHero(character);
    myRef.current.scrollIntoView(); 
  };

  const handleSearch = (name) => {
    getSearchedData(name);
  };

  const showMore = (episode) =>{
    console.log(episode)
  }

  return (
    <div className="container">
      
      <Logo />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="columns is-multiline is-mobile is-justify-content-center">
          <SearchBox handleSearch={handleSearch} />
          <Hero handleClick={showMore} referencia={myRef} data={characterHero} />

          <Characters handleCharacterHero={handleCharacterHero} data={data} />
        </div>
      )}

    </div>
  );
};

export default App;
