import React from 'react';
import { Form, Input } from 'antd';
import { contactFormField, contactInfo } from './contactInfo';
import "./styles.scss";

const ContactUs = (props) => {
    const { ContactUsSectionRef } = props;

    const onFinish = (values) => {
        console.log('Received values:', values);
        // You can handle form submission logic here
    };

    return (
        <div className="contact-wrapper" ref={ContactUsSectionRef}>
            <div className="contact-first-section">
                <h1 className="common-title">Contact me</h1>
                <div className="contact-box-wrapper">
                    {contactInfo.map((data, index) => (
                        <div
                            className="contact-box"
                            key={index}
                            data-aos={data.animation}
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <span>{data.logo}</span>
                            <a href={data.link}>{data.title}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="contact-second-section"
                data-aos="flip-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
            >
                <h1 className="common-title">Get-in-tuch</h1>
                <Form
                    name="contact-form"
                    onFinish={onFinish}
                    className='form-section'
                >
                    {contactFormField.map((data, index) => (
                        <Form.Item
                            name={data.name}
                            rules={data.rules}
                            className='common-input'
                        >
                            <Input prefix={data.icon} placeholder={data.placeholder} />
                        </Form.Item>
                    ))}
                    <div className="button-box">
                        <button type="primary" htmlType="submit" className='common-sky-blue-button'>
                            Submit
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default ContactUs;