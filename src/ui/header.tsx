import '../css/header.css'
import '../css/global.css'

function Header(){
    return (
    <>
        <div className="header">
            <div className="left-section">
                <p className='logo-text'>Keoni Han</p>
            </div>
            <div className="middle-section">
                <a href='/about'>
                    <p className='header-text'>About me</p>
                </a>   
                <p className='header-text'>Projects</p>
                <p className='header-text'>Contributions</p>
            </div>
            <div className="right-section">
                <p className='header-text'>Contact Me</p>
            </div>  
        </div>
    </>
    )
}

export default Header;