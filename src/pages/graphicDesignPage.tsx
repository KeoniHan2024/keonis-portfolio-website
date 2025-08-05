import Header from "../ui/header";
import '../css/global.css'
import '../css/containers.css'
import GraphicDesignContainer from "../ui/graphicDesignContainer";


function GraphicDesignPage() {
    return (<>
        <Header/>
        <div className="home-grid">
            <GraphicDesignContainer/>
        </div>
    </>)

}

export default GraphicDesignPage;