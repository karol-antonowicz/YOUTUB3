import React from 'react';
import './Watch.scss';
import { Video } from '../../components/Video/Video'
import { RelatedVideos } from '../../components/RelatedVideos/RelatedVideos';
import { VideoMetaData } from '../../components/VideoMetaData/VideoMetaData';
import { VideoInfoBox } from '../../components/VideoInfoBox/VideoInfoBox';
import { Comments } from '../../containers/Comments/Comments';

export const Watch = props => {
    return (
        <div className='watch-grid'>
            <Video className='video' id='0beu6BodTYs' />
            <VideoMetaData viewCount={1520}/>
            <VideoInfoBox/>
            <Comments amountComments={66645}/>
            <RelatedVideos className='relatedVideos' />
        </div>
    )
}