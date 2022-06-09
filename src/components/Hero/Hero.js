import React from 'react'
import "bulma/css/bulma.min.css";
import CardHero from '../CardHero/CardHero';

const Hero = (props) => {
  return (
    
      <CardHero referencia={props.referencia} character={props.data} /> 
    
  )
}

export default Hero