import '../css/global.css'
import '../css/containers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss, faHtml5, faJs, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

function ProjectContainer() {
    return(<>
        <div className='project-container'>
           <p className='section-header'>Projects</p>
            <div className="project-container-box">
                <div className="gradient"></div>
                <img className='project-img' src='../../public/img/molecule.png'></img>
                <div className="project-info-container">
                    <p className='project-name'>3D Molecule Visualizer w/ Hand Tracking</p>
                </div>
                <div className="project-info-container">
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faJs}/> JavaScript
                    </button>
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faHtml5}/> HTML
                    </button>
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faCss}/> CSS
                    </button>
                </div>
                <div className="project-info-container"><p>
                An interactive web application designed to visualize and manipulate molecular structures. Users can explore 3D models of molecules using their hand gestures and camera.</p></div>
                <div className="project-info-container hide">
                    <button className='github-button'>Open Repo</button>
                </div>
            </div>
            <div className="project-container-box">
                <div className="gradient"></div>
                <img className='project-img' src='../../public/img/molecule.png'></img>
                <div className="project-info-container">
                    <p className='project-name'>ASL Detection Application</p>
                </div>
                <div className="project-info-container">
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faPython}/> Python
                    </button>
                </div>
                <div className="project-info-container"><p>
                Using Hugging Face, this application allows a user to put ASL signs and have it detect in real time what letter you are holding up.</p></div>
                <div className="project-info-container hide">
                    <button className='github-button'>Open Repo</button>
                </div>
            </div>
            <div className="project-container-box">
                <div className="gradient"></div>
                <img className='project-img' src='../../public/img/molecule.png'></img>
                <div className="project-info-container">
                    <p className='project-name'>LEED Stories AR Dashboard</p>
                </div>
                <div className="project-info-container">
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faJs}/> JavaScript
                    </button>
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faReact}/> React
                    </button>
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faHtml5}/> HTML
                    </button>
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faCss}/> CSS
                    </button>
                </div>
                <div className="project-info-container"><p>
                React web app for augmented reality stories that showcase how the Shiley Marcos building at the University of Portland 
                was able to achieve LEED Status. While also creating a dashboard that shows mock data of the building. (we weren't given access to the real Building automation system)</p></div>
                <div className="project-info-container hide">
                    <a href='https://github.com/KeoniHan2024/LEED_Stories_AR_Data_Dashboard'>
                        <button className='github-button'>Front-end Repo</button>
                    </a>
                    <a href='https://github.com/leeh24/ar_leed_stories_pipeline'>
                        <button className='github-button'>Back-end Repo</button>
                    </a>
                    <a href='../../public/attachments/AR_LEED_Capstone Final Report.pdf' target='_blank'>
                        <button className='github-button'>Final Report</button>
                    </a>
                </div>
            </div>
            <div className="project-container-box">
                <div className="gradient"></div>
                <img className='project-img' src='../../public/img/molecule.png'></img>
                <div className="project-info-container">
                    <p className='project-name'>NBA Stats Analysis Application</p>
                </div>
                <div className="project-info-container">
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faPython}/> Python
                    </button>
                </div>
                <div className="project-info-container">
                    <p>
                        A Python application to compare NBA player statistics across seasons. Users select players and stats via a Tkinter GUI, with data fetched using the NBA API. Sklearn powers statistical comparisons (like similarity scores), and Matplotlib visualizes the results in insightful charts.
                    </p>
                </div>
                <div className="project-info-container hide">
                    <button className='github-button'>Open Repo</button>
                </div>
            </div>
            <div className="project-container-box">
                <div className="gradient"></div>
                <img className='project-img' src='../../public/img/molecule.png'></img>
                <div className="project-info-container">
                    <p className='project-name'>Fullstack NBA.com Clone</p>
                </div>
                <div className="project-info-container">
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faPhp}/> PHP
                    </button>
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faPython}/> Python
                    </button>
                </div>
                <div className="project-info-container">
                    <p>
                    Built a full-stack web app replicating eBay's bidding, item listing, buying, and authentication using the LAMP 
                    stack (Linux, Apache, MySQL, PHP). 
                    Developed a secure user authentication system with password hashing and session management. 
                    Implemented a real-time bidding system with bid validation, history tracking, and countdown timers. 
                    Designed item listing and search functionality with filters for easy discovery. Used cookies for session persistence and improved user experience. 
                    </p>
                </div>
                <div className="project-info-container hide">
                    <a href='https://github.com/KeoniHan2024/Ebay-Clone'>
                        <button className='github-button'>Open Repo</button>
                    </a>
                </div>
            </div>
        </div>
    
    </>
    )
}

export default ProjectContainer;