import React from 'react';
import {SideBarItem} from './SideBarItem';
import {Menu} from 'semantic-ui-react';
import './SideBar.scss';

export const SideBar = () => {
    return (
        <Menu borderless vertical stackable fixed='left' className='side-nav'>
            <SideBarItem highlight={true} label='Home' icon='home'/>
            <SideBarItem label='Trending' icon='fire'/>
            <SideBarItem label='Subscriptions' icon='inbox'/>
            <SideBarItem label='History' icon='time'/>
            <SideBarItem label='Watch Later' icon='time'/>
            <SideBarItem label='Liked videos' icon='thumbs up'/>
            <SideBarItem label='Movies and Shows' icon='video'/>
            <SideBarItem label='Settings' icon='setting'/>
            <SideBarItem label='Help' icon='help'/>
            <SideBarItem label='Send feedback' icon='chat outline'/>
        </Menu>
    )
}