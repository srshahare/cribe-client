import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div className="LandingFooter">
            <div className="Group">
                <h1>Cribe</h1>
            </div>
            <div className="Group">
                <h3>Quick Links</h3>
                <p>About us</p>
                <p>Blog</p>
                <p>Feedback</p>
                <p>Help</p>
            </div>
            <div className="Group">
                <h3>Legal Stuff</h3>
                <p>Disclaimer</p>
                <p>Financing</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
            <div className="Group">
                <h3>Knowing you're always on the best energy deal.</h3>
                <button>Sign up now</button>
            </div>
        </div>
    )
}

export default Footer;