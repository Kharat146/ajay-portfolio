import { FaPhoneAlt, FaSkype, FaUser } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";

export const contactInfo = [
    {
        title: "+91 8999702238",
        link: "tel:+918999702238",
        logo: <FaPhoneAlt />,
        animation: "zoom-in"
    },
    {
        title: "kharatajay998@gmail.com",
        link: "mailto:kharatajay998@gmail.com",
        logo: <MdAttachEmail />,
        animation: "zoom-in"
    },
    {
        title: "ajaykharat146",
        link: "https://www.linkedin.com/in/ajaykharat146",
        logo: <FaLinkedinIn />,
        animation: "zoom-in"
    },
    {
        title: "Skype",
        link: "https://join.skype.com/invite/yudFv5X11oPZ",
        logo: <FaSkype />,
        animation: "zoom-in"
    }
]

export const contactFormField = [
    {
        name: "name",
        Label: "Name",
        rules:[{ required: true, message: 'Please enter your name!' }],
        icon: <FaUser />,
        placeholder: "Enter your name*"
    },
    {
        name: "email",
        Label: "Email",
        rules:[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ],
        icon: <MdAttachEmail/>,
        placeholder: "Enter your email*"
    },
    {
        name: "phone",
        Label: "Phone",
        rules:[{ required: true, message: 'Please enter your phone number!' }],
        icon: <FaPhoneAlt />,
        placeholder: "Enter your phone number*"
    },
    {
        name: "message",
        Label: "Message",
        rules:[{ required: true, message: 'Please enter your message!' }],
        icon: <RiMessage2Fill />,
        placeholder: "Message*"
    },
]