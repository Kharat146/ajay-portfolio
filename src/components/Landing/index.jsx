<<<<<<< HEAD
import React from 'react';
import imgUrl from "../../assets/images/images.jpg";
import "./styles.scss";

const Landing = (props) => {
    const { homeSectionRef } = props;
    console.log("ggg",[] == ![])

    return (
        <div className="landing-wrapper" ref={homeSectionRef}>
            <div className="left-section">
                <h3
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    Passionate Front-end Developer
                </h3>
                <h1
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    React.js Developer
                </h1>
                <p
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    Experienced frontend and React.js developer proficient in crafting responsive and user-friendly web interfaces, with a strong focus on creating dynamic and seamless user experiences.
                </p>
                <button
                    className='common-sky-blue-button'
                    data-aos="slide-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    Contact Us
                </button>
            </div>
            <div className="right-section">
                <div className="img-section">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

=======
import React from 'react';
import imgUrl from "../../assets/images/image1.jpeg";
import "./styles.scss";

const Landing = (props) => {
    const { homeSectionRef, ContactUsSection } = props;

        // Scroll up to the clicked section
        const handleClick = (ref) => {
            ref.current.scrollIntoView({
                behavior: 'smooth',
            });
        };

    return (
        <div className="landing-wrapper" ref={homeSectionRef}>
            <div className="left-section">
                <h3
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    Passionate Front-end Developer
                </h3>
                <h1
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    React.js Developer
                </h1>
                <p
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    Experienced frontend and React.js developer proficient in crafting responsive and user-friendly web interfaces, with a strong focus on creating dynamic and seamless user experiences.
                </p>
                <button
                    className='common-sky-blue-button'
                    data-aos="slide-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    onClick={() => handleClick(ContactUsSection)}
                >
                    Contact Us
                </button>
            </div>
            <div className="right-section">
                <div className="img-section">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

>>>>>>> master
export default Landing;