import React from 'react'
import "bulma/css/bulma.min.css";
import CardHero from '../CardHero/CardHero';

const Hero = (props) => {

  console.log(props.data)

  return (
    <div>
      <CardHero character={props.data} /> 
    </div>
  )
}

export default Hero