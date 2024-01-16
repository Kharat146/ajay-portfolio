import React, { useState } from 'react';
import { FaHome, FaLaptopCode, FaPhoneAlt, FaUser, FaUserAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import "./styles.scss";
import { Modal } from 'antd';

const Headers = (props) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    // Scroll up to the clicked section
    const handleClick = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
        });
        setIsOpenModal(false);
    };

    return (
        <div className="header-wrapper">
            <div className="top-header">
                <div className="header-email">
                    <a href={"mailto:kharatajay998@gmail.com"}>
                        <span><MdAttachEmail /></span>
                        <span>Kharatajay998@gmail.com</span>
                    </a>
                </div>
                <div className="header-phone">
                    <span><FaPhoneAlt /></span>
                    <span>+91 8999702238</span>
                </div>
            </div>
            <div className="bottom-header">
                <div className="header-left-section">
                    <h1 
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                    >
                        AK
                    </h1>
                </div>
                <div className="header-right-section">
                    <div className="header-navlink">
                        <div onClick={() => handleClick(props.scrollToRef.homeSection)}><FaHome />Home</div>
                        <div onClick={() => handleClick(props.scrollToRef.aboutSection)}> <FaUser />About</div>
                        <div onClick={() => handleClick(props.scrollToRef.experienceSection)}><IoSchoolSharp /> Experience</div>
                        <div onClick={() => handleClick(props.scrollToRef.projectSection)}><FaLaptopCode /> Projects</div>
                        <div onClick={() => handleClick(props.scrollToRef.ContactUsSection)}><MdAttachEmail /> Contact Us</div>
                    </div>
                </div>
                <div className="header-right-section-mobile">
                    <div onClick={() => setIsOpenModal(true)}><GiHamburgerMenu /></div>
                </div>
            </div>
            <Modal
                open={isOpenModal}
                footer={null}
                onCancel={() =>setIsOpenModal(false)}
                className='navbar-modal'
            >
                <div className="header-navlink">
                    <div onClick={() => handleClick(props.scrollToRef.homeSection)}><FaHome />Home</div>
                    <div onClick={() => handleClick(props.scrollToRef.aboutSection)}> <FaUser />About</div>
                    <div onClick={() => handleClick(props.scrollToRef.experienceSection)}><IoSchoolSharp /> Experience</div>
                    <div onClick={() => handleClick(props.scrollToRef.projectSection)}><FaLaptopCode /> Projects</div>
                    <div onClick={() => handleClick(props.scrollToRef.ContactUsSection)}><MdAttachEmail /> Contact Us</div>
                </div>
            </Modal>
        </div>
    )
}

export default Headers;