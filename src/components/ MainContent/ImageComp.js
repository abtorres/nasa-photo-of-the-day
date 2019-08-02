import React from'react';
import './ImageComp.css';

const ImageComp = (image) => {
    // console.log(image)
    return (
        <div className='image-container'>
            <div>
               <h1>{image.title}</h1> 
            </div>                
            <div className='img-div'>
                <img alt='' src={image.image}></img>
                <p>{image.explanation}</p>
            </div>
        </div>
    );
}

export default ImageComp;