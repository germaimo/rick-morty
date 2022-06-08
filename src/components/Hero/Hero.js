import React from 'react'
import "bulma/css/bulma.min.css";
import CardHero from '../CardHero/CardHero';

const Hero = (props) => {
  return (
    <div>
      <CardHero key={0} character={props.data} /> 
    </div>
  )
}

export default Hero