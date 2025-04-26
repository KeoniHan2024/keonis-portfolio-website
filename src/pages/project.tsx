import Header from "../ui/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import "../css/global.css";
import "../css/containers.css";

interface ProjectProps {
  projectName: string;
  description: string;
  projectImg: string;
  techStack: { name: string; useFontAwesome:boolean; imageSrc?: string; fontAwesomeName?:IconDefinition }[];
  url: string;
}

const Project = (props: ProjectProps) => {
    const techStackItems = props.techStack;
  return (
    <>
      <Header />
      <div className="home-grid">
        <div className="project-container">
            {/* <p className="section-header">{props.headerName}</p> */}
              <div className="project-container-box project-individual">
                <div className="gradient"></div>
                {/* <img className="project-img" src={props.projectImg}></img> */}
                <div className="project-info-container">
                  <p className="project-header">
                    {props.projectName}
                  </p>
                </div>
                <div className="project-info-container">
                    {techStackItems.map((item)=> (
                        <button className="tech-stack-button">
                                {item.useFontAwesome ? <FontAwesomeIcon icon={item.fontAwesomeName as IconProp} /> : <img
                                    className="project-tech-img"
                                    alt="svgImg"
                                    src={item.imageSrc}
                                    />}
                            {item.name}
                        </button>
                    ))
                    }
                </div>
                <div className="project-info-container">
                  <a href={props.url} target="_blank" className="anchor">
                    <button className="github-button">Open Repo</button>
                  </a>
                </div>
                
              </div>
              <div className="experience-container">
                <p className="project-desc">
                  {props.description}
                </p>
              </div>
            <p className="section-header">Video Demo</p>
            COMING SOON
            <p className="section-header">Pictures</p>
            COMING SOON
        </div>
      </div>
    </>
  );
};

export default Project;
