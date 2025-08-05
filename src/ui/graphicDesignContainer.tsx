import '../css/global.css'
import '../css/containers.css'

function GraphicDesignContainer() {
    return(<>
    <div className="project-container">
        <p className="section-header">Projects</p>
        <div className="project-container-box">
            <div className="gradient"></div>
            <div className="project-img" >
                <img src="./img/DJALCover.jpg"></img>
            </div>
            <div className="project-info-container"></div>
                <p className="project-name">
                    DJAL Graphics (Visualizers, Logo, Show Backdrop)
                </p>
            <div className="project-info-container">
                <p className="project-desc">
                   Here are some graphic design projects I've created for the DJ Artist DJAL. These include video backdrops, visualizers, logos, and promotional social media posts
                </p>
            </div>
            <div className="project-info-container hide">
            <a href="/graphic-design-projects/djal"><button className="github-button">Learn More &rarr;</button></a>
          </div>
        </div>
    </div>
    </>)
}

export default GraphicDesignContainer;

