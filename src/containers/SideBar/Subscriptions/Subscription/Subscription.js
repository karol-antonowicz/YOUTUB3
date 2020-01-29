import React from 'react';
import {Icon, Image, Menu} from 'semantic-ui-react';
import './Subscription.scss';

export function Subscription(props) {
    let rightElement = null;    // if there is no new videos, and no broadcasting then nothing is there, otherwise it wud throw an error of undefined I guess
    const {broadcasting, amountNewVideos} = props;
    if (broadcasting) {
        rightElement = <Icon name='bullseye'/>;
    } else if (amountNewVideos) {
        rightElement = <span className='new-videos-count'>{amountNewVideos}</span>;
    }

    return (
        <Menu.Item>
            <div className='subscription'>
                <div>
                    <Image src='http://via.placeholder.com/28x28' avatar/>  
                    <span>{props.label}</span>
                </div>
                {rightElement}
            </div>
        </Menu.Item>

    )
}

