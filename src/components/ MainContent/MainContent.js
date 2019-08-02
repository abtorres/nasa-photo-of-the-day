import React from 'react';
import './MainContent.css';
import ImageComp from './ImageComp';

const MainContent = (imgData) => {
    return (
        <div className='main-content'>
            <div className='image-container'>
                <ImageComp image={imgData.imgUrl} explanation={imgData.explanation} title={imgData.title}/>
            </div>
        </div>        
    );
}

export default MainContent;