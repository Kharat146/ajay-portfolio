import React from 'react';
import { BiWorld } from "react-icons/bi";
import { IoSchoolSharp } from 'react-icons/io5';
import { education, experience } from './experienceInfo';
import "./styles.scss";

const Experience = (props) => {
    const { experienceSectionRef } = props;

    return (
        <div className="experience-wrapper" ref={experienceSectionRef}>
            <div className="experience-section">
                <h1 className='common-title'>Industrial Experience</h1>
                <div className="experience-card-section">
                    {experience.map((info, index) => (
                        <div
                            className="common-card"
                            data-aos={info.animation}
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <div className="card-left-section">
                                <div className="img-section">
                                    <BiWorld />
                                </div>
                            </div>
                            <div className="card-right-section">
                                <h3 className='common-card-year'>
                                    {info.year}
                                </h3>
                                <h2 className='common-card-title'>
                                    {info.title}
                                </h2>
                                <h3 className='common-card-subtitle'>
                                    {info.firm}
                                </h3>
                                <p className='common-card-desc'>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{info.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="experience-section">
                <h1 className='common-title'>Education</h1>
                <div className="experience-card-section">
                    {education.map((info, index) => (
                        <div 
                            className="common-card"
                            data-aos={info.animation}
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <div className="card-left-section">
                                <div className="img-section">
                                    <IoSchoolSharp />
                                </div>
                            </div>
                            <div className="card-right-section">
                                <h3 className='common-card-year'>
                                    {info.year}
                                </h3>
                                <h2 className='common-card-title'>
                                    {info.title}
                                </h2>
                                <h3 className='common-card-subtitle'>
                                    {info.college}
                                </h3>
                                <p className='common-card-desc'>
                                    {info.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;