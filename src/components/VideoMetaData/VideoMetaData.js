import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import {Rating} from '../Rating/Rating'
import './VideoMetaData.scss';

export const VideoMetaData = props => {
    const viewCount = props.viewCount || 0;
    return (
        <div className='video-metadata'>
            <h3>Video Title</h3>
            <div className='video-stats'>
                <span>{viewCount} views</span>
                <div className='video-actions'>
                    <Rating likeCount={1000} dislikeCount={100} />
                    <Button basic icon labelPosition='left'>
                        <Icon name='share' />
                        Share
                    </Button>
                    <Button basic icon>
                        <Icon name='add circle' />
                    </Button>
                    <Button basic icon>
                        <Icon name='ellipsis horizontal' />
                    </Button>
                </div>
            </div>
            <Divider />
        </div>
    )
}