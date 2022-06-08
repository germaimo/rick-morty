import React from "react";
import "bulma/css/bulma.min.css";
import styles from "./card3d.module.css";

const Card3D = ({
  character: { id, name, image, status, species, origin, location, episode },
  handleClick,
}) => {
  return (
    <div
      onClick={() =>
        handleClick({
          id,
          name,
          image,
          status,
          species,
          origin,
          location,
          episode,
        })
      }
      className="column is-5-mobile is-3-desktop is-flex is-justify-content-center"
    >
      
        <div className="card">
          <div className="card-image">
            <figure className="image is-128x128 is-clickable">
              <img
                className={styles["imgGris"]}
                src={image}
                alt="profile big size"
              />
            </figure>
          </div>
        </div>
      
    </div>
  );
};

export default Card3D;
