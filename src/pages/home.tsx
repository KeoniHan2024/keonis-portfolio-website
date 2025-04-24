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
                    console.log('Hidden target is intersecting!');
                }
                else {
                    entry.target.classList.remove('show');
                  }
                });
              }, {threshold: 0.2});
              
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
        </div>
        </>
    )
}


export default Home;