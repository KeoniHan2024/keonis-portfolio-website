import '../css/global.css'
import '../css/containers.css'

function ProjectContainer() {
    return(<>
        <div className='project-container'>
           <p className='section-header'>Projects</p>
            <div className="project-container-box">
                <img className='project-img' src='../../public/img/molecule.png'></img>
                <div className="project-info-container">
                    <p className='project-name'>3d Molecule Visualizer w/ Hand Tracking</p>
                </div>
                <div className="project-info-container"><p>3d Molecule</p></div>
                <div className="project-info-container last-row"><p>About
                An interactive web application designed to visualize and manipulate molecular structures. Users can explore 3D models of molecules using their hand gestures and camera.</p></div>
            </div>
        </div>
    
    </>
    )
}

export default ProjectContainer;