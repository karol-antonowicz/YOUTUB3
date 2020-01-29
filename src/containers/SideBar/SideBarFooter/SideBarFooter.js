import React from 'react';
import './SideBarFooter.scss'

export const SideBarFooter = props => {
    return (
        <React.Fragment>
            <div className='footer-block'>
                <div>About Press Copyright</div>
                <div>Creators Advertise</div>
                <div>Developer +MyTube</div>
                <div>Legal</div>
            </div>
            <div className='footer-block'>
                <div>Terms Privacy</div>
                <div>Policy & Safety </div>
                <div>Test New Features</div>
                <div>Legal</div>
            </div>
            <div className='footer-block'>
                <div>Karol Antonowicz + ©Productioncoder.com</div>
            </div>
        </React.Fragment>

    )
}