import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ExperienceContainer() {
    return(<>
        <div className="experience-container">
            <p className="section-header">
                Experience
            </p>  
            <div className="job-container">
            <a href="https://oceanit.com/" target="_blank">
                <p className="company-text">Oceanit</p>
            </a>
                <p className="position-text">Software Engineer Intern</p>
                <p className="date-text">Jun<span className="dash">e - </span>August 2024</p>
                <p className="desc-text">
                    <ul>
                        <li>Created a hand gesture-based web application deployed on Proto Holo, enhancing user interaction and usability for 
                        immersive environments.</li>
                        <li>Utilizing Unity to design and develop a VR application for analyzing pipe coatings, integrating advanced 
                        visualization techniques for enhanced inspection and analysis capabilities.</li>
                        <li>Developed and pitched an innovative idea/product to Oceanit staff and simulated venture capitalists, honing 
                        presentation skills and gaining experience in conceptualizing ideas from inception to presentation</li>
                    </ul>
                </p>
            </div>
            <div className="job-container">
                <a href="https://www.accuityllp.com/" target="_blank">
                    <p className="company-text">Accuity LLP</p>
                </a>
                <div className="date-container">
                    <p className="position-text">IT Audit Intern <span style={{paddingRight: '10px'}}>&rarr;</span></p>
                    <p className="date-text">Jun<span className="dash">e - </span>August 2023</p>
                </div>
                <div className="date-container">
                    <p className="position-text">Part-Time IT Auditor</p>
                    <p className="date-text">August 202<span className="dash">3 - </span>April 2024</p>
                </div>
                <p className="desc-text">
                    <ul>
                        <li>Gained hands-on experience in various aspects of IT auditing, including Mindbridge imports/analyses, General 
Ledger transformations using Microsoft Excel and PowerQuery, and ITGCs (Information Technology General 
Controls).</li>
                        <li>Actively contributed to optimizing the narrative process, and Standard of Procedures for an estimated 30% improved 
                        efficiency and effectiveness. </li>
                        <li>Experimented with using Chat GPT’s API to convert IT audit narratives into generated process flowcharts in 
                        Microsoft Visio. </li>
                    </ul>
                </p>
            </div>
        </div>
    </>)
}


export default ExperienceContainer;
