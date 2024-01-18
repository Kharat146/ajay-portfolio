<<<<<<< HEAD
import logo from "../../assets/images/images.jpg";

export const projectInfo = [
    {
        projectLogo: logo,
        projectTitle: "BrandArmy",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        projectWorkDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        projectTools: {
            uiDevelopment: "HTML, CSS, Ant Design, AOS",
            JavascriptLibraries: "React Js, React-router-dom",
            stateManagement: "Redux"
        },
        animation: "fade-right"
    },
    {
        projectLogo: logo,
        projectTitle: "Perfit Rock web admin",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        projectWorkDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        projectTools: {
            uiDevelopment: "HTML, CSS, Ant Design",
            JavascriptLibraries: "React Js, React-router-dom",
            stateManagement: "Redux, contextAPI"
        },
        animation: "fade-left"
    }
]

export const projectPersonalInfo = [
    {
        projectLogo: logo,
        projectTitle: "Food delivery",
        projectDesc: "",
        projectWorkDesc: "",
        projectTools: {
            uiDevelopment: "HTML, CSS, Ant Design, AOS",
            JavascriptLibraries: "React Js, React-router-dom",
            stateManagement: "Redux"
        },
        animation: "fade-right"
    },
    {
        projectLogo: logo,
        projectTitle: "Personal portfolio",
        projectDesc: "",
        projectWorkDesc: "",
        projectTools: {
            uiDevelopment: "HTML, CSS, Ant Design, AOS",
            JavascriptLibraries: "React Js",
        },
        animation: "fade-up"
    },
    {
        projectLogo: logo,
        projectTitle: "Next js demo",
        projectDesc: "",
        projectWorkDesc: "",
        projectTools: {
            uiDevelopment: "HTML, CSS, Tailwind CSS",
            JavascriptLibraries: "Next js",
            stateManagement: "Redux Toolkit"
        },
        animation: "fade-left"
    }
=======
import BALogo from "../../assets/images/logo.png";
import perfitRockLogo from "../../assets/images/favicon.ico";
import portFolioLogo from "../../assets/images/image1.jpeg";
import foodDeliveryLogo from "../../assets/images/food-delivery.png";
import nextJsLogo from "../../assets/images/next-js.png";

export const projectInfo = [
    {
        projectLogo: BALogo,
        projectTitle: "BrandArmy",
        projectDesc: "BrandArmy is a subscription-based fan-monetization and engagement platform for creators and their most supportive and loyal audiences. BrandArmy provides a place where creators can invite their social media audiences for content, community, monetization, and engagement.",
        projectWorkDesc: <ul>
            <li>Created a cool and awesome design for Brandarmy, making it look great on all devices and adding smooth animations for a more attractive appearance.</li>
            <li>Made livestreaming features with Agora, allowing users to chat, like, and send tips during live broadcasts.</li>
            <li>Added messaging features, letting users send messages, receive notifications, and share media easily.</li>
            <li>Made a secure login system with a simple form and checks to keep user information safe.</li>
            <li>Integrated Twilio features for enhanced functionality.</li>
            <li>Developed a simple way for users to create and share posts with text, media, or as paid content. Users can also interact by commenting, liking, and sending tips. Added features to edit and delete posts as well.</li>
        </ul>,
        projectTools: {
            uiDevelopment: "HTML, CSS, Ant Design, AOS",
            JavascriptLibraries: "React Js, React-router-dom",
            stateManagement: "Redux"
        },
        animation: "fade-right"
    },
    {
        projectLogo: perfitRockLogo,
        projectTitle: "Perfit Rock web admin",
        projectDesc: "Try On Engagement Rings flutter mobile app revolutionizes the online jewellery shopping experience. Seamlessly blending augmented reality with a vast collection of stunning rings, the app allows users to virtually try on exquisite pieces, ensuring a perfect fit and eliminating the uncertainty of online purchases. Users can visualize how each ring looks on their hand, making the selection process enjoyable, interactive.",
        projectWorkDesc: <ul>
        <li>I built a user-friendly form using Ant Design, ensuring it looks good on both phones and computers, and added validation to make sure the entered information follows specific patterns.</li>
        <li>I designed tables that allow users to easily add, delete, or update information, providing a simple way to manage data.</li>
        <li>I used Context API and Redux to manage the application's state, creating a smart system that remembers and organizes user input seamlessly.</li>
        <li>I implemented a secure authentication process, including captchas to verify human users, and added validation to ensure the accuracy of entered data.</li>
        <li>I enabled the system to efficiently handle images by utilizing S3 buckets, providing a secure and scalable way to store and manage visual content.</li>
    </ul>,
        projectTools: {
            uiDevelopment: "HTML, CSS, Ant Design",
            JavascriptLibraries: "React Js, React-router-dom",
            stateManagement: "Redux, contextAPI"
        },
        animation: "fade-left"
    }
]

export const projectPersonalInfo = [
    {
        projectLogo: foodDeliveryLogo,
        projectTitle: "Food delivery",
        projectDesc: "",
        projectWorkDesc: <ul>
        <li>Developed a food delivery app using React, HTML, CSS, Redux and SCSS for an engaging user experience.</li>
        <li>Implemented features allowing users to add, update, and delete products within the app.</li>
        <li>Enabled users to create accounts and log in, enhancing personalization and security.</li>
        <li>Provided users with the option to add products to a watchlist for easy tracking and quick access.</li>
        <li>Ensured the app's adaptability to different devices and screen sizes for a seamless user experience.</li></ul>,
        projectTools: {
            uiDevelopment: "HTML, CSS, Ant Design, AOS",
            JavascriptLibraries: "React Js, React-router-dom",
            stateManagement: "Redux"
        },
        animation: "fade-right"
    },
    {
        projectLogo: portFolioLogo,
        projectTitle: "Personal portfolio",
        projectDesc: "",
        projectWorkDesc: <ul>
        <li>I built an eye-catching and interactive portfolio using HTML, CSS, React, Ant Design, and SCSS.</li>
        <li>Included detailed information about my education, experience, and work to give a complete picture of my professional journey.</li>
        <li>Made sure the portfolio looks good and works well on different devices by designing it to be responsive.</li>
        <li> Included my contact details for easy communication.</li>
        <li>Used React to add dynamic and engaging features for a better user experience.</li>
        <li> Designed an easy-to-use navigation system for smooth exploration.</li></ul>,
        projectTools: {
            uiDevelopment: "HTML, CSS, Ant Design, AOS",
            JavascriptLibraries: "React Js",
        },
        animation: "fade-up"
    },
    {
        projectLogo: nextJsLogo,
        projectTitle: "Next js demo",
        projectDesc: "",
        projectWorkDesc: <ul>
        <li>Built a Next.js demo using Next.js, Tailwind CSS, and Redux Toolkit for efficient state management.</li>
        <li>Implemented a CRUD (Create, Read, Update, Delete) system for users and tasks, allowing users to add, update, delete, and view both users and tasks.</li>
        <li>Designed responsive tables to display user and task data, ensuring a seamless viewing experience on various devices.</li>
        <li>Utilized Redux Toolkit for state management, enhancing the efficiency and scalability of the application.</li></ul>,
        projectTools: {
            uiDevelopment: "HTML, CSS, Tailwind CSS",
            JavascriptLibraries: "Next js",
            stateManagement: "Redux Toolkit"
        },
        animation: "fade-left"
    }
>>>>>>> master
]