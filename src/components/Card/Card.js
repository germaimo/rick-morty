import React from 'react';
import "bulma/css/bulma.min.css";

import Card from "react-animated-3d-card";

const Cardx = ({ character: { name, image, status, species, origin, location } }) => {
    return (
        <div className="column is-one-quarter">
            
            <Card
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Card clicked")}
            >
                <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt="profile big size" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={image} alt="profile thumb" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{name}</p>
                        </div>
                    </div>

                    <div className="content">
                       <p>status:<a>{status}</a>.</p>
                       <p>specie:<a>{species}</a>.</p>
                       <p>origin: {origin.name}</p>
                       <p>location: {location.name}</p>
                    </div>
                </div>
            </div>
            </Card>
        </div>
    )
}

export default Cardx