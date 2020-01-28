import React from 'react';
import {Image, Menu} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.jpg';

export const HeaderNav = () => {
    return (
        <Menu className='top-menu' borderless fixed='top'>
            <Menu.Item header className='logo'>
                <Image src={logo} size='tiny'/>
            </Menu.Item>
            <Menu.Item className='nav-container'>
                {/*something will be here **/}
            </Menu.Item>
        </Menu>
    )
}

export default HeaderNav;