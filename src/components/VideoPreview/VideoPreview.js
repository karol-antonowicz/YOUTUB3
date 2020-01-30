import React from 'react';
import { Image } from 'semantic-ui-react'
import './VideoPreview.scss'

export const VideoPreview = props => {
    return (
        <div className='video-preview'>
          <div className='image-container'>
            <Image src='http://via.placeholder.com/210x118'/>
            <div className='time-label'>
              <span>05:22</span>
            </div>
          </div>
        </div>
      );
  
}