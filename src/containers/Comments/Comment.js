import React from 'react';
import {Image, Button} from 'semantic-ui-react';
import {Rating} from '../../components/Rating/Rating';
import './Comment.scss';

export const Comment = () => {
    return (
        <div className='comment'>
            <Image className='user-image' src='https://via.placeholder.com/48x48' circular/>
            <div>
                <div className='user-name'>User Name</div>
                <span>Comment text</span>
                <div className='comment-actions'>
                    <Rating likeCount={1} dislikeCount={18} />
                    <Button size='mini' compact>REPLY</Button>
                </div>
            </div>
        </div>
    )
}