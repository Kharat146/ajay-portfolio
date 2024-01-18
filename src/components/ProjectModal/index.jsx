<<<<<<< HEAD
import React from 'react';
import { Modal } from 'antd';
import "./styles.scss";

const ProjectModal = (Props) => {
    // Destructuring Props
    const { projectState, isOpenModal, closeModal } = Props;

    return (
        // Project details modal
        <Modal
            open={isOpenModal}
            onCancel={closeModal}
            footer={null}
            className='modal-container'
        >
            <div className="modal-wrapper">
                <div className="modal-project-logo">
                    <img src={projectState.projectLogo} alt="" />
                </div>
                <div className="modal-project-title">
                    <h1 className='common-title'>{projectState.projectTitle}</h1>
                </div>
                <h3 className='common-title'>About Project:</h3>
                <div className="modal-project-desc">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{projectState.projectDesc}</p>
                    <br />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{projectState.projectWorkDesc}</p>
                </div>
                <h3 className='common-title'>Tools & Technology:</h3>
                <div className="modal-project-skill">
                    <p>UI development:</p>
                    <p>{projectState.projectTools?.uiDevelopment}</p>
                </div>
                <div className="modal-project-skill">
                    <p>JavaScript libraries:</p>
                    <p>{projectState.projectTools?.JavascriptLibraries}</p>
                </div>
                {projectState.projectTools?.stateManagement &&
                    <div className="modal-project-skill">
                        <p>State management:</p>
                        <p>{projectState.projectTools?.stateManagement}</p>
                    </div>
                }
            </div>
        </Modal>
    )
}

=======
import React from 'react';
import { Modal } from 'antd';
import "./styles.scss";

const ProjectModal = (Props) => {
    // Destructuring Props
    const { projectState, isOpenModal, closeModal } = Props;

    return (
        // Project details modal
        <Modal
            open={isOpenModal}
            onCancel={closeModal}
            footer={null}
            className='modal-container'
        >
            <div className="modal-wrapper">
                <div className="modal-project-logo">
                    <img src={projectState.projectLogo} alt="" />
                </div>
                <div className="modal-project-title">
                    <h1 className='common-title'>{projectState.projectTitle}</h1>
                </div>
                {projectState.projectDesc && <h3 className='common-title'>About Project:</h3>}
                <div className="modal-project-desc">
                    {projectState.projectDesc && <p>&nbsp;&nbsp;&nbsp;&nbsp;{projectState.projectDesc}</p>}
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{projectState.projectWorkDesc}</p>
                </div>
                <h3 className='common-title'>Tools & Technology:</h3>
                <div className="modal-project-skill">
                    <p>UI development:</p>
                    <p>{projectState.projectTools?.uiDevelopment}</p>
                </div>
                <div className="modal-project-skill">
                    <p>JavaScript libraries:</p>
                    <p>{projectState.projectTools?.JavascriptLibraries}</p>
                </div>
                {projectState.projectTools?.stateManagement &&
                    <div className="modal-project-skill">
                        <p>State management:</p>
                        <p>{projectState.projectTools?.stateManagement}</p>
                    </div>
                }
            </div>
        </Modal>
    )
}

>>>>>>> master
export default ProjectModal;