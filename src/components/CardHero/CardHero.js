import React from "react";
import "bulma/css/bulma.min.css";

import styles from './cardhero.module.css'

const CardHero = ({
  character: { name, image, status, species, origin, location, episode }, referencia, handleClick
}) => {
  return (
    <div ref={referencia} className="column is-10 is-flex is-full is-justify-content-center">
      
      <div className={`box has-background-black ${styles['fixedWidth']}`}>
        <div className="card is-flex is-size-7-desktop is-size-7-touch">
          <div className={`box card-image m-4 ${styles['fixedHeight']} `}> 
            <figure className="image">
              <img
                style={{ filter: "contrast(1.2)", maxWidth: '300px', maxHeight: '300px' }}
                src={image}
                alt="hero profile"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div>
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">Location: {location.name}</p>
                <p className="subtitle is-6">Origin: {origin.name}</p>
              </div>
            </div>

            <div className="content">
              <p className="mb-4">Appears in <span onClick={() => handleClick({ episode })} className="tag is-light">{episode.length}</span> {episode.length > 1 ? 'episodes': 'episode'}.</p>
              <br/>
              <p className="mt-6">Specimen: {species}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CardHero;
