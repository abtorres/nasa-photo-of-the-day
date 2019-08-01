import React from 'react';
import './MainContent.css';
import Credits from './Credits';
import ImageComp from './ImageComp';

const MainContent = () => {
    return (
        <div className='main-content'>
            <Credits />
            <div className='image-container'>
                <ImageComp />
            </div>
        </div>        
    );
}

export default MainContent;