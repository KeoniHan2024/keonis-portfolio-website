import Header from "../ui/header";
import ContactContainer from "../ui/contactContainer";
import '../css/global.css'
import ExperienceContainer from "../ui/experienceContainer";
import ProjectContainer from "../ui/projectContainer";

function Home() {
    return (
        <>
        <Header/>
        <div className="home-grid">
            <ContactContainer/>
            <ExperienceContainer/>
            <ProjectContainer/>
        </div>
        </>
    )
}


export default Home;