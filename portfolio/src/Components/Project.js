import React from 'react'
import '../CSS/Project.css'
function Project(props) {
    const {name,link,image} = props;
    return (
        <div className="bg-light rounded-3 mt-1">
            <div className="p-3 d-flex row w-100 justify-content-between">
                <div className="col-6 d-flex flex-column">
                    <p><strong>{name}</strong></p>
                    <small><a href={link} target="_blank">Link to Github</a></small>
                </div>
                <div className="col-4">
                    <img src={image} alt={name}/>
                </div>
            </div>
        </div>
    )
}

export default Project
