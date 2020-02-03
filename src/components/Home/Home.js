import React from 'react';
import { VideoGrid } from '../VideoGrid/VideoGrid';
import { SideBar } from '../../containers/SideBar/SideBar'
import './Home.scss';

export const Home = () => {
    return (
        <React.Fragment>
            <SideBar />
            <div className='home'>
                <div className='responsive-video-grid-container'>
                    <VideoGrid title='Trending' />
                    <VideoGrid title='Autos & Vehicles' hideDivider={true} />
                </div>
            </div>
        </React.Fragment>
    )
}