import React from 'react';
import './Video.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export const Video = props => {
    if (!props.id) {
        return null;
    }
    const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`;

    return (
        <div className='video-container'>
            <div className='video'>
                <iframe 
                className='video-player'
                src={embedUrl}
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
                allowfullscreen
                title='video'>
                </iframe>
            </div>
        </div>
    )
}