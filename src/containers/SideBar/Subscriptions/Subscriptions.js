import React from 'react';
import {Subscription} from './Subscription/Subscription'
import {Divider} from 'semantic-ui-react';
import {SideBarHeader} from '../SideBarHeader';

export const Subscriptions = props => {
    return (
        <React.Fragment>
            <SideBarHeader title='Subscriptions'/>
            <Subscription label='Dis Aint Porn' amountNewVideos={4} broadcasting/>
            <Subscription label='Tech House' amountNewVideos={16}/>
            <Subscription label='Piano lessons' broadcasting/>
            <Divider/>
        </React.Fragment>
    )
}