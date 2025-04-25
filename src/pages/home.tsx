import Header from "../ui/header";
import ContactContainer from "../ui/contactContainer";
import '../css/global.css'
import ExperienceContainer from "../ui/experienceContainer";
import ProjectContainer from "../ui/projectContainer";
import TechContainer from "../ui/techContainer";
import Background from "../ui/background";
import {useRef, useEffect} from 'react';

function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const hiddenElements = document.querySelectorAll('.hidden');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show');
                  }
                });
              }, {threshold: 0.4});
              
            hiddenElements.forEach((el) => observer.observe(el))


              if (containerRef.current) {
                observer.observe(containerRef.current);
              }
          
              return () => {
                if (containerRef.current) {
                  observer.unobserve(containerRef.current);
                }
              };
        }
        
      }, []);

    return (
        <>
        <Background/>
        <Header/>
        <div className="home-grid" ref={containerRef}>
            <ContactContainer/>
            <TechContainer/>
            <ExperienceContainer/>
            <ProjectContainer/>
            {/* <a href="#top" className="back-to-top-button">
              <button id="backToTopBtn" title="Back to top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M12 2.25c-5.304 0-9.75 4.446-9.75 9.75s4.446 9.75 9.75 9.75 9.75-4.446 9.75-9.75S17.304 2.25 12 2.25zm8.25 9.75a8.25 8.25 0 01-8.25 8.25 8.25 8.25 0 01-8.25-8.25 8.25 8.25 0 018.25-8.25 8.25 8.25 0 018.25 8.25zM12.53 6.47a.75.75 0 00-1.06 0l-4.5 4.5a.75.75 0 001.06 1.06l3.22-3.22v6.88a.75.75 0 001.5 0V8.81l3.22 3.22a.75.75 0 001.06-1.06l-4.5-4.5z" clip-rule="evenodd" />
                </svg>
              </button>
            </a> */}
            <a href="#top" className="back-to-top-button">
              <button id="backToTopBtn" title="Back to top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M12 2.25c-5.304 0-9.75 4.446-9.75 9.75s4.446 9.75 9.75 9.75 9.75-4.446 9.75-9.75S17.304 2.25 12 2.25zm8.25 9.75a8.25 8.25 0 01-8.25 8.25 8.25 8.25 0 01-8.25-8.25 8.25 8.25 0 018.25-8.25 8.25 8.25 0 018.25 8.25zM12.53 6.47a.75.75 0 00-1.06 0l-4.5 4.5a.75.75 0 001.06 1.06l3.22-3.22v6.88a.75.75 0 001.5 0V8.81l3.22 3.22a.75.75 0 001.06-1.06l-4.5-4.5z" clip-rule="evenodd" />
                </svg>
              </button>
            </a>
        </div>
        </>
    )
}


export default Home;