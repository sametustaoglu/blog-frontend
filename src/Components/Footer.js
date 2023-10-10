import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className='footer'>
            <p className="footer-title">Samet USTAOGLU</p>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/sametustaoglu/" className="footer-icon"><LinkedInIcon/></a>
                <a href="https://github.com/sametustaoglu" className="footer-icon"><GitHubIcon/></a>
            </div>
            <p className='footer-copyright'>&#169; 2022 copyright all right reserved</p>
        </div>
    )
}

export default Footer
