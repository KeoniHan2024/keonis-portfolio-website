import '../css/global.css'
import '../css/containers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';

function ProjectContainer() {
    return(<>
        <div className='project-container'>
           <p className='section-header'>Projects</p>
            <div className="project-container-box">
                <div className="gradient"></div>
                <img className='project-img' src='../../public/img/molecule.png'></img>
                <div className="project-info-container">
                    <p className='project-name'>3d Molecule Visualizer w/ Hand Tracking</p>
                </div>
                <div className="project-info-container">
                    <button className='tech-stack-button'>
                        <FontAwesomeIcon icon={faJs}/> Javascript
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
        </div>
    
    </>
    )
}

export default ProjectContainer;