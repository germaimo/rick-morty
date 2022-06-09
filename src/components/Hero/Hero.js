import React from 'react'
import "bulma/css/bulma.min.css";
import CardHero from '../CardHero/CardHero';

const Hero = ({handleClick, referencia, data}) => {
  return (
    
      <CardHero handleClick={handleClick} referencia={referencia} character={data} /> 
    
  )
}

export default Hero