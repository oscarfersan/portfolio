import React from 'react'

function CarouselImage(props) {
    const images = props.array;
    return (
        <div className="d-flex row justify-content-around align-items-center align-content-center">
            {images.map((image)=>(
                <img style={{width:"150px",maxHeight:"150px",filter:"grayscale(100%)"}} key={image.id} src={image.url} alt={image.url} />
            ))}            
        </div>
    )
}

export default CarouselImage
