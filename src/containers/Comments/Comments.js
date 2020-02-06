import React from 'react';
import {CommentsHeader} from './CommentsHeader';
import {Comment} from './Comment';
import {AddComment} from './AddComment';
import './Comments.scss';

export const Comments = props => {
    return (
        <div className='comments'>
            <CommentsHeader amountComments={props.amountComments} />
            <AddComment />
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    );
}