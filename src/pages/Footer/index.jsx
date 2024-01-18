<<<<<<< HEAD
import React from 'react';
import { FaSkype } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import "./style.scss";

const Footer = () => {

    const socialMedia = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/your-facebook-username"
        },
        {
            icon: <BsInstagram />,
            link: "https://www.instagram.com/your-instagram-username"
        },
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/ajaykharat146"
        },
        {
            icon: <FaXTwitter />,
            link: "https://twitter.com/your-twitter-username"
        },
        {
            icon: <FaSkype />,
            link: "https://join.skype.com/invite/yudFv5X11oPZ",
        },
    ]

    return (
        <div className="footer-wrapper">
            <h3 className='common-title'>&copy; 2024 | Created & Designed by <span>Ajay Kharat</span>.</h3>
            <div className="social-media-section">
                {socialMedia.map((data, index) => (
                    <div className="social-media-container" key={index}>
                        <a href={data.link}>{data.icon}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

=======
import React from 'react';
import { FaSkype } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import "./style.scss";

const Footer = () => {

    const socialMedia = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/your-facebook-username"
        },
        {
            icon: <BsInstagram />,
            link: "https://www.instagram.com/your-instagram-username"
        },
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/ajaykharat146"
        },
        {
            icon: <FaXTwitter />,
            link: "https://twitter.com/your-twitter-username"
        },
        {
            icon: <FaSkype />,
            link: "https://join.skype.com/invite/yudFv5X11oPZ",
        },
    ]

    return (
        <div className="footer-wrapper">
            <h3 className='common-title'>&copy; 2024 | Created & Designed by <span>Ajay Kharat</span>.</h3>
            <div className="social-media-section">
                {socialMedia.map((data, index) => (
                    <div className="social-media-container" key={index}>
                        <a href={data.link}>{data.icon}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

>>>>>>> master
export default Footer;