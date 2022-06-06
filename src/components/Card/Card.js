import React from 'react';
import "bulma/css/bulma.min.css";

import Card from "react-animated-3d-card";

const Cardx = ({ character: { name, image, status, species, origin, location } }) => {
    return (
        <div className="column is-one-fifth">

            <Card
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Card clicked")}
            >
                <div className="card">
                    
                <div className="card-image">
                    <figure className="image is-128x128">
                        <img style={{filter:'contrast(1.2)'}} src={image} alt="profile big size" />
                    </figure>
                </div>

        </div>
            </Card >
        </div >
    )
}

export default Cardx