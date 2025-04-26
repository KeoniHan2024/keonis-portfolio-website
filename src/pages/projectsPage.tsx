import Header from "../ui/header";
import ProjectContainer from "../ui/projectContainer";
import '../css/global.css'
import '../css/containers.css'


function ProjectsPage() {
    return (<>
        <Header/>
        <div className="home-grid">
            <ProjectContainer isStatic={true}/>
        </div>
    </>)

}

export default ProjectsPage;