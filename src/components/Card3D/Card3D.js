import React from 'react';
import "bulma/css/bulma.min.css";



const Card3D = ({ character: { id, name, image, status, species, origin, location }, handleClick }) => {
    

    return (
        <div onClick={ () => handleClick(id)} className="column is-5-mobile is-3-desktop is-flex is-justify-content-center">
            {/* <Card onClick={() => console.log("Card clicked")} > */}
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-128x128">
                            <img style={{ filter: 'contrast(1.2)' }} src={image} alt="profile big size" />
                        </figure>
                    </div>
                </div>
            {/* </Card> */}
        </div >
    )
}

export default Card3D