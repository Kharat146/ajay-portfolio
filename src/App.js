import { useEffect, useRef } from "react";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Footer from "./pages/Footer";
import Headers from "./pages/Header";
import AOS from 'aos';
import "aos/dist/aos.css";

AOS.init();

function App() {
  // Create useref for section reference
  const homeSectionRef = useRef();
  const aboutSectionRef = useRef();
  const experienceSectionRef = useRef();
  const projectSectionRef = useRef();
  const ContactUsSectionRef = useRef();

  useEffect(() => {
    AOS.refresh();
    //eslint-disable-next-line
  }, []);

  const scrollToRef = {
    homeSection: homeSectionRef,
    aboutSection: aboutSectionRef,
    experienceSection: experienceSectionRef,
    projectSection: projectSectionRef,
    ContactUsSection: ContactUsSectionRef
  };

  return (
    <div className="App">
      <Headers scrollToRef={scrollToRef}/>
      <Landing homeSectionRef={homeSectionRef}/>
      <About aboutSectionRef={aboutSectionRef}/>
      <Experience experienceSectionRef={experienceSectionRef}/>
      <Projects projectSectionRef={projectSectionRef}/>
      <ContactUs ContactUsSectionRef={ContactUsSectionRef}/>
      <Footer/>
    </div>
  );
}

export default App;
