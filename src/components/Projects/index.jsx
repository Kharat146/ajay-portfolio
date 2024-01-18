<<<<<<< HEAD
import React, { useState } from 'react';
import { projectInfo, projectPersonalInfo } from './projectInfo';
import ProjectModal from '../ProjectModal';
import "./styles.scss";

const Projects = (props) => {
    const { projectSectionRef } = props;

    const [projectState, setProjectState] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);

    // Open project info modal
    const openModal = (data) => {
        setProjectState(data);
        setIsOpenModal(true);
    }

    // Close project info modal
    const closeModal = () => {
        setIsOpenModal(false);
    }
    return (
        <div className="projects-wrapper" ref={projectSectionRef}>
                <h1 className='common-title'>Projects</h1>
            <div className="project-main-container">
                <h2 className='common-title'>Industrial projects:</h2>
                <div className="top-container">
                    {projectInfo.map((data, index) => (
                        <div 
                            className="common-project-card"
                            key={index}
                            data-aos={data.animation}
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <div className="project-logo">
                                <img src={data.projectLogo} alt="" />
                            </div>
                            <div className="project-title">
                                <h2 className='common-title'>{data.projectTitle}</h2>
                            </div>
                            <button className='common-sky-blue-button' onClick={()=>openModal(data)}>Read more</button>
                        </div>
                    ))}
                </div>
                <h2 className='common-title'>Personal projects:</h2>
                <div className="bottom-container">
                    {projectPersonalInfo.map((data, index) => (
                        <div 
                            className="common-project-card"
                            key={index}
                            data-aos={data.animation}
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <div className="project-logo">
                                <img src={data.projectLogo} alt="" />
                            </div>
                            <div className="project-title">
                                <h2 className='common-title'>{data.projectTitle}</h2>
                            </div>
                            <button className='common-sky-blue-button' onClick={()=>openModal(data)}>Read more</button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Project details modal */}
            <ProjectModal 
                projectState={projectState} 
                isOpenModal={isOpenModal} 
                closeModal={closeModal}
            />
            {/*  */}
        </div>
    )
}

=======
import React, { useState } from 'react';
import { projectInfo, projectPersonalInfo } from './projectInfo';
import ProjectModal from '../ProjectModal';
import "./styles.scss";

const Projects = (props) => {
    const { projectSectionRef } = props;

    const [projectState, setProjectState] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);

    // Open project info modal
    const openModal = (data) => {
        setProjectState(data);
        setIsOpenModal(true);
    }

    // Close project info modal
    const closeModal = () => {
        setIsOpenModal(false);
    }
    return (
        <div className="projects-wrapper" ref={projectSectionRef}>
                <h1 className='common-title'>Projects</h1>
            <div className="project-main-container">
                <h2 className='common-title'>Industrial projects:</h2>
                <div className="top-container">
                    {projectInfo.map((data, index) => (
                        <div 
                            className="common-project-card"
                            key={index}
                            data-aos={data.animation}
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <div className="project-logo">
                                <img src={data.projectLogo} alt="" />
                            </div>
                            <div className="project-title">
                                <h2 className='common-title'>{data.projectTitle}</h2>
                            </div>
                            <button className='common-sky-blue-button' onClick={()=>openModal(data)}>Read more</button>
                        </div>
                    ))}
                </div>
                <h2 className='common-title'>Personal projects:</h2>
                <div className="bottom-container">
                    {projectPersonalInfo.map((data, index) => (
                        <div 
                            className="common-project-card"
                            key={index}
                            data-aos={data.animation}
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <div className="project-logo">
                                <img src={data.projectLogo} alt="" />
                            </div>
                            <div className="project-title">
                                <h2 className='common-title'>{data.projectTitle}</h2>
                            </div>
                            <button className='common-sky-blue-button' onClick={()=>openModal(data)}>Read more</button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Project details modal */}
            <ProjectModal 
                projectState={projectState} 
                isOpenModal={isOpenModal} 
                closeModal={closeModal}
            />
            {/*  */}
        </div>
    )
}

>>>>>>> master
export default Projects;