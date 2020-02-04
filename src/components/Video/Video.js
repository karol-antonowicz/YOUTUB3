import React from 'react';
import './Video.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export const Video = props => {
    if (!props.id) {
        return null;
    }
    const embedUrl = `${BASE_EMBED_URL}${props.id}`;

    return (
        <iframe 
        width="560" height="315" 
        src={embedUrl}
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen>
        </iframe>
    )
}