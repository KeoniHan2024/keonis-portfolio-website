import Header from "../ui/header";
import ContactContainer from "../ui/contactContainer";
import '../css/global.css'
import ExperienceContainer from "../ui/experienceContainer";
import ProjectContainer from "../ui/projectContainer";
import TechContainer from "../ui/techContainer";

function Home() {
    return (
        <>
        <Header/>
        <div className="home-grid">
            <ContactContainer/>
            <TechContainer/>
            <ExperienceContainer/>
            <ProjectContainer/>
        </div>
        </>
    )
}


export default Home;