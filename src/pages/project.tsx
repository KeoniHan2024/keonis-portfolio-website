import Header from "../ui/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import "../css/global.css";
import "../css/containers.css";
import "../css/header.css";
import { InstagramEmbed } from 'react-social-media-embed';

interface ProjectProps {
  projectName: string;
  description: string;
  projectType: string;
  projectImg: string;
  techStack: { name: string; noImage?: boolean, useFontAwesome:boolean; imageSrc?: string; fontAwesomeName?:IconDefinition }[];
  url: string;
  videoUrls?: string[];
  pictureUrl?: string;
  instagramUrls?: string[];
}

const Project = (props: ProjectProps) => {
    const techStackItems = props.techStack;
  return (
    <>
      <Header />
      <div className="home-grid">
        <div className="project-container">
              <div className="project-container-box project-individual">
                <div className="gradient"></div>
                <div className="project-info-container">
                  <p className="project-header">
                    {props.projectName}
                  </p>
                </div>
                <div className="project-info-container">
                    {techStackItems.map((item) => (
                      <button className="tech-stack-button" key={item.name}>
                        {item.noImage && (
                          item.useFontAwesome ? (
                            <FontAwesomeIcon icon={item.fontAwesomeName as IconProp} />
                          ) : (
                            <img
                              className="project-tech-img"
                              alt="svgImg"
                              src={item.imageSrc}
                            />
                          )
                        )}
                        {item.name}
                      </button>
                    ))}
                </div>
                <div className="project-info-container">

                  {
                    props.projectType == "coding" && 
                    <a href={props.url} target="_blank" className="anchor">
                    <button className="github-button">Open Repo</button>
                  </a>
                  }
                  
                </div>
                
              </div>
              <div className="experience-container">
                <p className="project-desc">
                  {props.description}
                </p>
              </div>
            <p className="section-header">Video Demo</p>

            {props.videoUrls?.map((url, index) => {
              const { videoId, start } = getYouTubeVideoData(url);

              if (!videoId) return null;

              const embedUrl = `https://www.youtube.com/embed/${videoId}${start ? `?start=${start}` : ""}`;

              return (
                <iframe
                  key={index}
                  width="100%"
                  height="515"
                  src={embedUrl}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              );
            })}

            {props.instagramUrls && 
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed url="https://www.instagram.com/p/DLqbCfZhgEW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={520} />
            </div>
            }

            <p className="section-header">Pictures</p>
            COMING SOON
        </div>
      </div>
      
    </>
  );
};

function getYouTubeVideoData(url: string): { videoId: string | null; start: string | null } {
  const idMatch = url.match(/(?:\/embed\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  const startMatch = url.split('start=');

  return {
    videoId: idMatch ? idMatch[1] : null,
    start: startMatch[1] ? startMatch[1] : null,
  };
}



export default Project;
