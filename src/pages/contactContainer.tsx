import '../css/global.css'
import '../css/container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';


function ContactContainer() {
    return (
    <>
        <div className="home-grid">
            <div className="contact-container">
                <div className="title-row">
                    <p className="dev-name">Keoni Han</p>
                    <div className="button-grid">
                        <button className="contact-button">
                            <FontAwesomeIcon icon={faGithub} size='2xl' style={{color: 'white'}} />
                        </button>
                        <button className="contact-button">
                            <FontAwesomeIcon icon={faEnvelope} size='2xl' style={{color: 'white'}} />
                        </button>
                        <button className="contact-button">
                            <FontAwesomeIcon icon={faInstagram} size='2xl' style={{color: 'white'}} />
                        </button>
                        <button className="contact-button">
                            <FontAwesomeIcon icon={faYoutube} size='2xl' style={{color: 'white'}} />
                        </button>
                    </div>
                </div>
                <div className="location-row">
                    
                    <p className="location-text"><FontAwesomeIcon icon={faMapPin} size='lg' style={{ verticalAlign: 'bottom', paddingRight:'5px'}}/>
                    Honolulu, HI, United States
                    </p>
                </div>
                {/* <div className="bio-row">
                    test
                </div> */}
            </div>
        </div>
    </>
    )
}


export default ContactContainer;

