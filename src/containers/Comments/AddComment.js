import React from 'react';
import { Form, Image, TextArea } from 'semantic-ui-react';
import './AddComment.scss';

export const AddComment = () => {
    return (
        <div className='add-comment'>
            <Image className='user-image' src='https://via.placeholder.com/48x48' circular />
            <Form>
                <Form.TextArea control={TextArea} autoheight='true' placeholder='Add a public comment' />
            </Form>
        </div>
    )
}