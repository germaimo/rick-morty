import React from 'react';
import 'bulma/css/bulma.css';
import Card3D from '../Card3D/Card3D';

const Characters = (props) => {
  
  return (
    <div className='container m-6'>
      <div className='columns is-multiline is-mobile is-justify-content-center'>
          {props.data.map( (character, index) => <Card3D handleClick={props.handleCharacterHero} key={index} character={character} /> )}
        </div>
    </div>
  )
}

export default Characters