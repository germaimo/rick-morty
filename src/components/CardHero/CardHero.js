import React from "react";
import "bulma/css/bulma.min.css";

import styles from './cardhero.module.css'

const CardHero = ({
  character: { name, image, status, species, origin, location, episode },
}) => {
  return (
    <div className="column is-full is-flex is-justify-content-center">
      
      <div className={`box ${styles['fixedWidth']}`}>
        <div className="card is-flex is-size-7-desktop is-size-7-touch">
          <div className="card-image">
            <figure className="image">
              <img
                style={{ filter: "contrast(1.2)" }}
                src={image}
                alt="hero profile"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div>
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">{location.name}</p>
                <p className="subtitle is-6">{origin.name}</p>
              </div>
            </div>

            <div className="content">
            
              Appears in <span className="tag is-light">{episode.length}</span> {episode.length > 1 ? 'episodes': 'episode'} .
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              Specimen: {species}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CardHero;
