import React from 'react';
import {SideBarItem} from './SideBarItem';
import {SideBarHeader} from './SideBarHeader';
import {Menu, Divider} from 'semantic-ui-react';
import './SideBar.scss';
import { Subscriptions } from './Subscriptions/Subscriptions';
import { SideBarFooter } from './SideBarFooter/SideBarFooter';

export const SideBar = () => {
    return (
        <Menu borderless vertical stackable fixed='left' className='side-nav'>
            <SideBarItem highlight={true} label='Home' icon='home'/>
            <SideBarItem label='Trending' icon='fire'/>
            <SideBarItem label='Subscriptions' icon='inbox'/>
            <Divider/>
            <SideBarHeader title='library'/>
            <SideBarItem label='History' icon='time'/>
            <SideBarItem label='Watch Later' icon='time'/>
            <SideBarItem label='Liked videos' icon='thumbs up'/>
            <Divider/>
            <Subscriptions/>
            <SideBarHeader title='more from youtube'/>
            <SideBarItem label='Movies and Shows' icon='video'/>
            <Divider/>
            <SideBarItem label='Settings' icon='setting'/>
            <SideBarItem label='Help' icon='help'/>
            <SideBarItem label='Send feedback' icon='chat outline'/>
            <Divider/>
            <SideBarFooter/>
        </Menu>
    )
}