import "../css/global.css";
import "../css/containers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAws,
  faCss,
  faHtml5,
  faJs,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

interface ProjectContainerProps {
  isStatic: boolean; 
}

function ProjectContainer(props: ProjectContainerProps) {
  return (
    <>
      <div className="project-container">
        <p className="section-header">Projects</p>
          <div className={`project-container-box ${props.isStatic ? '' : 'hidden'}`}>
            <div className="gradient"></div>
            <img className="project-img" src="./img/ufc_gym.webp"></img>
            <div className="project-info-container">
              <p className="project-name">
                Gym Tracker Application (IN PROGRESS)
              </p>
            </div>
            <div className="project-info-container">
              <button className="tech-stack-button">
                <img
                  className="project-tech-img"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik00NSw0SDVDNC40NDcsNCw0LDQuNDQ4LDQsNXY0MGMwLDAuNTUyLDAuNDQ3LDEsMSwxaDQwYzAuNTUzLDAsMS0wLjQ0OCwxLTFWNUM0Niw0LjQ0OCw0NS41NTMsNCw0NSw0eiBNMjksMjYuNDQ1aC01VjQyaC00CVYyNi40NDVoLTVWMjNoMTRWMjYuNDQ1eiBNMzAuMTIxLDQxLjExMnYtNC4xNThjMCwwLDIuMjcxLDEuNzEyLDQuOTk2LDEuNzEyYzIuNzI1LDAsMi42Mi0xLjc4MiwyLjYyLTIuMDI2CWMwLTIuNTg2LTcuNzIxLTIuNTg2LTcuNzIxLTguMzE1YzAtNy43OTEsMTEuMjUtNC43MTcsMTEuMjUtNC43MTdsLTAuMTQsMy43MDRjMCwwLTEuODg3LTEuMjU4LTQuMDE4LTEuMjU4cy0yLjksMS4wMTMtMi45LDIuMDk2CWMwLDIuNzk1LDcuNzkxLDIuNTE2LDcuNzkxLDguMTQxQzQyLDQ0Ljk1NSwzMC4xMjEsNDEuMTEyLDMwLjEyMSw0MS4xMTJ6Ii8+PC9zdmc+"
                />
                Typescript
              </button>
              <button className="tech-stack-button">
                <img
                  className="project-tech-img"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGQ9Ik0gMy4xMjUgMSBDIDIuMjE5IDEgMS41MDMwNjI1IDEuNDgwNSAxLjE2NDA2MjUgMi4zMTI1IEMgMS4wNTcwNjI1IDIuNTY5NSAxLjAwMjk1MzEgMi44NDIwNDY5IDEuMDAxOTUzMSAzLjEyMzA0NjkgQyAxLjAwMDk1MzEgNC4wNTQwNDY5IDEuNjAwOTM3NSA0LjgwOTcxODggMS45NjA5Mzc1IDUuMjYxNzE4OCBDIDIuMDIzOTM3NSA1LjM0MDcxODcgMi4wODA2MjUgNS40MTEwOTM4IDIuMTQwNjI1IDUuNDk2MDkzOCBMIDIuMzAyNzM0NCA1LjcxMDkzNzUgQyAyLjQ2MzczNDQgNS45MjE5Mzc1IDIuNjQ3MDc4MSA2LjE2MTI1IDIuNzA1MDc4MSA2LjI4MTI1IEMgMi43MjQwNzgxIDYuMzM2MjUgMi43NDkyMDMxIDYuNDMyNjg3NSAyLjc4MzIwMzEgNi41NTQ2ODc1IEMgMi45NDAyMDMxIDcuMTE5Njg3NSAzLjIzMzIxODcgOC4xNjk3NSAzLjY5OTIxODggOC45Njg3NSBDIDMuODg3MjE4NyA5LjI5MDc1IDQuMTUxNzk2OSA5LjY5NTQ2ODcgNC4zNDE3OTY5IDkuOTgwNDY4OCBDIDQuMjE0Nzk2OSAxMC42MTY0NjkgNCAxMS43ODggNCAxMi41IEMgNCAxMy43NSA0LjI1OTIxODggMTQuNzUzODc1IDQuODI0MjE4OCAxNS42NzE4NzUgQyA1LjAzMzIxODcgMTUuOTk5ODc1IDUuNjcxIDE3IDYuNzUgMTcgQyA3LjEzMyAxNyA3Ljc2OTQwNjIgMTYuODUwMzkxIDcuOTQxNDA2MiAxNS45MDAzOTEgQyA4LjcwNjQwNjMgMTYuODg3MzkxIDEwIDE4LjEyNSAxMiAxOSBDIDEyIDE5IDguMjUwNzk2OSAxNC42MjU0MzggNy41OTE3OTY5IDExLjg5ODQzOCBDIDcuNTkxNzk2OSAxMS44OTg0MzcgNi44NzQ2MjUgMTIuNjI1Mzc1IDYuMjY1NjI1IDE0LjEwOTM3NSBDIDYuMDgzNjI1IDEzLjY1MTM3NSA2IDEzLjEzNSA2IDEyLjUgQyA2IDExLjg3MyA2LjI3NTgxMjUgMTAuNDcxMzc1IDYuMzgyODEyNSA5Ljk4NDM3NSBMIDYuNDc2NTYyNSA5LjU2MDU0NjkgTCA2LjIzMDQ2ODggOS4yMDMxMjUgQyA2LjIyNjQ2ODcgOS4xOTYxMjUgNS43MjI3MzQ0IDguNDY4ODkwNiA1LjQyNzczNDQgNy45NjI4OTA2IEMgNS4wOTE3MzQ0IDcuMzg2ODkwNiA0Ljg0MzkzNzUgNi40OTU1NzgxIDQuNzEwOTM3NSA2LjAxNzU3ODEgQyA0LjY0NTkzNzUgNS43ODQ1NzgxIDQuNTk0ODc1IDUuNjE1OTUzMSA0LjU0Njg3NSA1LjUwMTk1MzEgQyA0LjM3MTg3NSA1LjEyMjk1MzEgNC4xMTU2MjUgNC43OTAwOTM3IDMuODkwNjI1IDQuNDk2MDkzOCBMIDMuNzY1NjI1IDQuMzMwMDc4MSBDIDMuNzAyNjI1IDQuMjM5MDc4MSAzLjYxOTM5MDYgNC4xMzM2MjUgMy41MjUzOTA2IDQuMDE1NjI1IEMgMy4zNDIzOTA2IDMuNzg1NjI1IDMuMDAxNzE4OCAzLjM1NzAzMTIgMy4wMTE3MTg4IDMuMDgyMDMxMiBMIDMuMTIzMDQ2OSAzLjAwMzkwNjIgTCAzLjEyNSAzIEMgMy45MiAzIDQuOTQ0MDc4MSAzLjU2NDM0MzcgNS4zMzAwNzgxIDMuNzc3MzQzOCBDIDUuNDU2MDc4MSAzLjg0NjM0MzggNS41NDg2NTYzIDMuODk0MDE1NiA1LjU5NzY1NjIgMy45MTYwMTU2IEwgNS43NzE0ODQ0IDMuOTkyMTg3NSBMIDYuMTEzMjgxMiA0LjAwMzkwNjIgQyA2LjU2MDI4MTMgNC4wMTM5MDYyIDcuOTE4OTA2MyA0LjA0NTY4NzUgOC44Nzg5MDYyIDQuNDI5Njg3NSBDIDEwLjYyOTkwNiA1LjEyOTY4NzUgMTEuNTk4MDMxIDUuODMwMzc1IDEyLjU4MjAzMSA3LjEwOTM3NSBDIDE0LjkwNjAzMSAxMC4xMzEzNzUgMTUuNzYzNDg0IDE0LjA0NDk4NCAxNS43NzE0ODQgMTQuMDgzOTg0IEwgMTUuODk2NDg0IDE0LjY0ODQzOCBMIDE2LjQ0MzM1OSAxNC44MjYxNzIgQyAxNi40NjIzNTkgMTQuODMzMTcyIDE3Ljk5MjkyMiAxNS4zNDQ2NDEgMTkuNDE5OTIyIDE2LjY4MTY0MSBDIDE3LjYyNDkyMiAxNy4xMjU2NDEgMTcgMTggMTcgMTggQyAxNyAxOCAxNy40NzYgMTguOTI4IDE5Ljc1IDIwLjM3NSBDIDIxLjEyNSAyMS4yNSAyMS44NzUgMjEuODc1IDIzIDIzIEMgMjMgMjMgMjEuODc1Njg4IDIwLjQ5OTgxMyAyMC4zMDQ2ODggMTguNTA3ODEyIEMgMjEuNTAwNjg3IDE4LjEyNDgxMyAyMi45NzA3MDMgMTcuOTI1NzgxIDIyLjk3MDcwMyAxNy45MjU3ODEgTCAyMi4wNjA1NDcgMTYuNjY0MDYyIEMgMjAuNTYyNTQ3IDE0LjU4NzA2MyAxOC41NTM2NTYgMTMuNTM4ODU5IDE3LjU5NzY1NiAxMy4xMzA4NTkgQyAxNy4yNjU2NTYgMTEuODY0ODU5IDE2LjI2Mjk2OSA4LjYxNDYyNSAxNC4xNjc5NjkgNS44OTA2MjUgQyAxMi45Njg5NjkgNC4zMzE2MjUgMTEuNjkzMDk0IDMuMzk5MzEyNSA5LjYyMTA5MzggMi41NzAzMTI1IEMgOC4zOTQwOTM3IDIuMDgwMzEyNSA2LjkxODcxODggMi4wMjE4NTk0IDYuMjYxNzE4OCAyLjAwNTg1OTQgQyA1LjY4NjcxODcgMS42ODk4NTk0IDQuNDA5IDEgMy4xMjUgMSB6IE0gNy4xODc1IDUgQyA3LjE4NzUgNSA2Ljc1IDUgNi4yNSA1LjEyNSBMIDcuNjI1IDYuOTk4MDQ2OSBDIDggNi41MDAwNDY5IDggNS45MTc5Njg4IDggNS45MTc5Njg4IEMgOCA1LjkxNzk2ODggNy43NTA1IDUuMjUgNy4xODc1IDUgeiIvPjwvc3ZnPg=="
                />
                MySql
              </button>
              <button className="tech-stack-button">
                <FontAwesomeIcon icon={faAws} color="white"/> AWS
              </button>
              <button className="tech-stack-button">
                <FontAwesomeIcon icon={faReact} /> React
              </button>
              <button className="tech-stack-button">
                <FontAwesomeIcon icon={faHtml5} /> HTML
              </button>
              <button className="tech-stack-button">
                <FontAwesomeIcon icon={faCss} /> CSS
              </button>
            </div>
            <div className="project-info-container">
              <p className="project-desc">
                A web application that allows users to log workouts, track
                progress, and manage exercises with ease. Built using React and
                TypeScript
              </p>
            </div>
            <div className="project-info-container hide">
                <a href="/projects/gym-tracker">
                  <button className="github-button">Learn More &rarr;</button>
                </a>
            </div>
          </div>
        <div className={`project-container-box ${props.isStatic ? '' : 'hidden'}`}>
          <div className="gradient"></div>
          <img className="project-img" src="./img/molecule.png"></img>
          <div className="project-info-container">
            <p className="project-name">
              3D Molecule Visualizer w/ Hand Tracking
            </p>
          </div>
          <div className="project-info-container">
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </button>
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faHtml5} /> HTML
            </button>
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faCss} /> CSS
            </button>
          </div>
          <div className="project-info-container">
            <p className="project-desc">
              An interactive web application designed to visualize and
              manipulate molecular structures. Users can explore 3D models of
              molecules using their hand gestures and camera.
            </p>
          </div>
          <div className="project-info-container hide">
            <a href="/projects/mol-vis"><button className="github-button">Learn More &rarr;</button></a>
          </div>
        </div>
        <div className={`project-container-box ${props.isStatic ? '' : 'hidden'}`}>
          <div className="gradient"></div>
          <img className="project-img" src="./img/asl.jpg"></img>
          <div className="project-info-container">
            <p className="project-name">ASL Detection Application</p>
          </div>
          <div className="project-info-container">
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faPython} /> Python
            </button>
          </div>
          <div className="project-info-container">
            <p className="project-desc">
              Using Hugging Face, this application allows a user to put ASL
              signs and have it detect in real time what letter you are holding
              up.
            </p>
          </div>
          <div className="project-info-container hide">
            <a href="/projects/asl-detection">
              <button className="github-button">Learn More &rarr;</button>
            </a>
          </div>
        </div>
        <div className={`project-container-box ${props.isStatic ? '' : 'hidden'}`}>
          <div className="gradient"></div>
          <img className="project-img" src="./img/Shiley-marcos.jpg"></img>
          <div className="project-info-container">
            <p className="project-name">LEED Stories AR Dashboard</p>
          </div>
          <div className="project-info-container">
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </button>
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faReact} /> React
            </button>
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faHtml5} /> HTML
            </button>
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faCss} /> CSS
            </button>
          </div>
          <div className="project-info-container">
            <p className="project-desc">
              React web app for augmented reality stories that showcase how the
              Shiley Marcos building at the University of Portland was able to
              achieve LEED Status. While also creating a dashboard that shows
              mock data of the building. (we weren't given access to the real
              Building automation system)
            </p>
          </div>
          <div className="project-info-container hide">
            <a href="/projects/leed-stories">
              <button className="github-button">Learn More &rarr;</button>
            </a>
          </div>
        </div>
        <div className={`project-container-box ${props.isStatic ? '' : 'hidden'}`}>
          <div className="gradient"></div>
          <img className="project-img" src="./img/nba.webp"></img>
          <div className="project-info-container">
            <p className="project-name">NBA Stats Analysis Application</p>
          </div>
          <div className="project-info-container">
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faPython} /> Python
            </button>
          </div>
          <div className="project-info-container">
            <p className="project-desc">
              A Python application to compare NBA player statistics across
              seasons. Users select players and stats via a Tkinter GUI, with
              data fetched using the NBA API. Sklearn powers statistical
              comparisons (like similarity scores), and Matplotlib visualizes
              the results in insightful charts.
            </p>
          </div>
          <div className="project-info-container hide">
            <a href="/projects/nba-stats"><button className="github-button">Learn More &rarr;</button></a>
          </div>
        </div>
        <div className={`project-container-box ${props.isStatic ? '' : 'hidden'}`}>
          <div className="gradient"></div>
          <img className="project-img" src="./img/ebay-logo.jpg"></img>
          <div className="project-info-container">
            <p className="project-name">Fullstack Ebay.com Clone</p>
          </div>
          <div className="project-info-container">
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faPhp} /> PHP
            </button>
            <button className="tech-stack-button">
              <FontAwesomeIcon icon={faPython} /> Python
            </button>
            <button className="tech-stack-button">
              <img
                className="project-tech-img"
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGQ9Ik0gMy4xMjUgMSBDIDIuMjE5IDEgMS41MDMwNjI1IDEuNDgwNSAxLjE2NDA2MjUgMi4zMTI1IEMgMS4wNTcwNjI1IDIuNTY5NSAxLjAwMjk1MzEgMi44NDIwNDY5IDEuMDAxOTUzMSAzLjEyMzA0NjkgQyAxLjAwMDk1MzEgNC4wNTQwNDY5IDEuNjAwOTM3NSA0LjgwOTcxODggMS45NjA5Mzc1IDUuMjYxNzE4OCBDIDIuMDIzOTM3NSA1LjM0MDcxODcgMi4wODA2MjUgNS40MTEwOTM4IDIuMTQwNjI1IDUuNDk2MDkzOCBMIDIuMzAyNzM0NCA1LjcxMDkzNzUgQyAyLjQ2MzczNDQgNS45MjE5Mzc1IDIuNjQ3MDc4MSA2LjE2MTI1IDIuNzA1MDc4MSA2LjI4MTI1IEMgMi43MjQwNzgxIDYuMzM2MjUgMi43NDkyMDMxIDYuNDMyNjg3NSAyLjc4MzIwMzEgNi41NTQ2ODc1IEMgMi45NDAyMDMxIDcuMTE5Njg3NSAzLjIzMzIxODcgOC4xNjk3NSAzLjY5OTIxODggOC45Njg3NSBDIDMuODg3MjE4NyA5LjI5MDc1IDQuMTUxNzk2OSA5LjY5NTQ2ODcgNC4zNDE3OTY5IDkuOTgwNDY4OCBDIDQuMjE0Nzk2OSAxMC42MTY0NjkgNCAxMS43ODggNCAxMi41IEMgNCAxMy43NSA0LjI1OTIxODggMTQuNzUzODc1IDQuODI0MjE4OCAxNS42NzE4NzUgQyA1LjAzMzIxODcgMTUuOTk5ODc1IDUuNjcxIDE3IDYuNzUgMTcgQyA3LjEzMyAxNyA3Ljc2OTQwNjIgMTYuODUwMzkxIDcuOTQxNDA2MiAxNS45MDAzOTEgQyA4LjcwNjQwNjMgMTYuODg3MzkxIDEwIDE4LjEyNSAxMiAxOSBDIDEyIDE5IDguMjUwNzk2OSAxNC42MjU0MzggNy41OTE3OTY5IDExLjg5ODQzOCBDIDcuNTkxNzk2OSAxMS44OTg0MzcgNi44NzQ2MjUgMTIuNjI1Mzc1IDYuMjY1NjI1IDE0LjEwOTM3NSBDIDYuMDgzNjI1IDEzLjY1MTM3NSA2IDEzLjEzNSA2IDEyLjUgQyA2IDExLjg3MyA2LjI3NTgxMjUgMTAuNDcxMzc1IDYuMzgyODEyNSA5Ljk4NDM3NSBMIDYuNDc2NTYyNSA5LjU2MDU0NjkgTCA2LjIzMDQ2ODggOS4yMDMxMjUgQyA2LjIyNjQ2ODcgOS4xOTYxMjUgNS43MjI3MzQ0IDguNDY4ODkwNiA1LjQyNzczNDQgNy45NjI4OTA2IEMgNS4wOTE3MzQ0IDcuMzg2ODkwNiA0Ljg0MzkzNzUgNi40OTU1NzgxIDQuNzEwOTM3NSA2LjAxNzU3ODEgQyA0LjY0NTkzNzUgNS43ODQ1NzgxIDQuNTk0ODc1IDUuNjE1OTUzMSA0LjU0Njg3NSA1LjUwMTk1MzEgQyA0LjM3MTg3NSA1LjEyMjk1MzEgNC4xMTU2MjUgNC43OTAwOTM3IDMuODkwNjI1IDQuNDk2MDkzOCBMIDMuNzY1NjI1IDQuMzMwMDc4MSBDIDMuNzAyNjI1IDQuMjM5MDc4MSAzLjYxOTM5MDYgNC4xMzM2MjUgMy41MjUzOTA2IDQuMDE1NjI1IEMgMy4zNDIzOTA2IDMuNzg1NjI1IDMuMDAxNzE4OCAzLjM1NzAzMTIgMy4wMTE3MTg4IDMuMDgyMDMxMiBMIDMuMTIzMDQ2OSAzLjAwMzkwNjIgTCAzLjEyNSAzIEMgMy45MiAzIDQuOTQ0MDc4MSAzLjU2NDM0MzcgNS4zMzAwNzgxIDMuNzc3MzQzOCBDIDUuNDU2MDc4MSAzLjg0NjM0MzggNS41NDg2NTYzIDMuODk0MDE1NiA1LjU5NzY1NjIgMy45MTYwMTU2IEwgNS43NzE0ODQ0IDMuOTkyMTg3NSBMIDYuMTEzMjgxMiA0LjAwMzkwNjIgQyA2LjU2MDI4MTMgNC4wMTM5MDYyIDcuOTE4OTA2MyA0LjA0NTY4NzUgOC44Nzg5MDYyIDQuNDI5Njg3NSBDIDEwLjYyOTkwNiA1LjEyOTY4NzUgMTEuNTk4MDMxIDUuODMwMzc1IDEyLjU4MjAzMSA3LjEwOTM3NSBDIDE0LjkwNjAzMSAxMC4xMzEzNzUgMTUuNzYzNDg0IDE0LjA0NDk4NCAxNS43NzE0ODQgMTQuMDgzOTg0IEwgMTUuODk2NDg0IDE0LjY0ODQzOCBMIDE2LjQ0MzM1OSAxNC44MjYxNzIgQyAxNi40NjIzNTkgMTQuODMzMTcyIDE3Ljk5MjkyMiAxNS4zNDQ2NDEgMTkuNDE5OTIyIDE2LjY4MTY0MSBDIDE3LjYyNDkyMiAxNy4xMjU2NDEgMTcgMTggMTcgMTggQyAxNyAxOCAxNy40NzYgMTguOTI4IDE5Ljc1IDIwLjM3NSBDIDIxLjEyNSAyMS4yNSAyMS44NzUgMjEuODc1IDIzIDIzIEMgMjMgMjMgMjEuODc1Njg4IDIwLjQ5OTgxMyAyMC4zMDQ2ODggMTguNTA3ODEyIEMgMjEuNTAwNjg3IDE4LjEyNDgxMyAyMi45NzA3MDMgMTcuOTI1NzgxIDIyLjk3MDcwMyAxNy45MjU3ODEgTCAyMi4wNjA1NDcgMTYuNjY0MDYyIEMgMjAuNTYyNTQ3IDE0LjU4NzA2MyAxOC41NTM2NTYgMTMuNTM4ODU5IDE3LjU5NzY1NiAxMy4xMzA4NTkgQyAxNy4yNjU2NTYgMTEuODY0ODU5IDE2LjI2Mjk2OSA4LjYxNDYyNSAxNC4xNjc5NjkgNS44OTA2MjUgQyAxMi45Njg5NjkgNC4zMzE2MjUgMTEuNjkzMDk0IDMuMzk5MzEyNSA5LjYyMTA5MzggMi41NzAzMTI1IEMgOC4zOTQwOTM3IDIuMDgwMzEyNSA2LjkxODcxODggMi4wMjE4NTk0IDYuMjYxNzE4OCAyLjAwNTg1OTQgQyA1LjY4NjcxODcgMS42ODk4NTk0IDQuNDA5IDEgMy4xMjUgMSB6IE0gNy4xODc1IDUgQyA3LjE4NzUgNSA2Ljc1IDUgNi4yNSA1LjEyNSBMIDcuNjI1IDYuOTk4MDQ2OSBDIDggNi41MDAwNDY5IDggNS45MTc5Njg4IDggNS45MTc5Njg4IEMgOCA1LjkxNzk2ODggNy43NTA1IDUuMjUgNy4xODc1IDUgeiIvPjwvc3ZnPg=="
              />
              MySql
            </button>
          </div>
          <div className="project-info-container">
            <p className="project-desc">
              Built a full-stack web app replicating eBay's bidding, item
              listing, buying, and authentication using the LAMP stack (Linux,
              Apache, MySQL, PHP). Developed a secure user authentication system
              with password hashing and session management. Implemented a
              real-time bidding system with bid validation, history tracking,
              and countdown timers. Designed item listing and search
              functionality with filters for easy discovery. Used cookies for
              session persistence and improved user experience.
            </p>
          </div>
          <div className="project-info-container hide">
            <a href="/projects/ebay-clone">
              <button className="github-button">Learn More &rarr;</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectContainer;
