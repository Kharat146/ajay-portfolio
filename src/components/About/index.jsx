import React from 'react';
import { Progress } from 'antd';
import "./styles.scss"

const About = (props) => {
    const { aboutSectionRef } = props;
    
    const skills = [
        { label: 'HTML', percentage: 90 },
        { label: 'CSS', percentage: 85 },
        { label: 'JavaScript', percentage: 70 },
        { label: 'React JS', percentage: 75 },
        { label: 'Redux', percentage: 80 },
        { label: 'Redux Toolkit', percentage: 80 },
        { label: 'Next.js', percentage: 60 },
        { label: 'Ant Design', percentage: 90 },
        { label: 'Tailwind CSS', percentage: 50 },
        { label: 'Bootstrap', percentage: 70 },
    ];

    return (
        <div className="about-wrapper" id="about_id" ref={aboutSectionRef}>
            <div className="top-section">
                <h1 className='common-title'>About Me</h1>
                <h3>
                    <span>Frontend developer</span>
                    <span>React js developer</span>
                    <span>UI/UX developer</span>
                </h3>
                <p>Hi, I'm Ajay Kharat, a skilled front-end developer with a strong focus on React.js. I am passionate about creating responsive and user-friendly web applications. My expertise lies in crafting efficient and maintainable code to deliver seamless user experiences. Whether it's building interactive user interfaces or optimizing performance, I thrive on turning ideas into reality through clean and elegant code.</p>
            </div>
            <div className="bottom-section">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-container">
                        <p>{skill.label}</p>
                        <Progress percent={skill.percentage} status="active" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;