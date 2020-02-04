import React from 'react';
import './Watch.scss';
import {VideoPreview} from '../../components/VideoPreview/VideoPreview'

export const Watch = props => {
    return (
        <React.Fragment>
        <VideoPreview horizontal={true}/>
        <VideoPreview />
      </React.Fragment>
    )
}