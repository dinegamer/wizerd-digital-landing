import React, { useEffect, useRef } from "react";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Projects from "./Projects";
import Services from "./Services";
import ContactForm from './ContactForm';
import Skills from './Skills';
const MainBody = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new window.LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });
    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <div data-scroll-container ref={scrollContainerRef}>
      <Intro />
      <Projects />
      <Services />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default MainBody;
