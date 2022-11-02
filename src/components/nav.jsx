import './style.scss'
import logo from '../../Assets/logo.png'

export default function Nav() {
    return (
        <div className='nav'>
            <div className='navLeft'>
                <a href="https://www.linkedin.com/in/yufa-li/" className="social-icon si-rounded si-small si-linkedin" target="_blank">
                    <i className="fi fi-brands-linkedin"></i>
                </a>
                <a href="https://twitter.com/yufa_li" className="social-icon si-rounded si-small si-twitter" target="_blank">
                    <i className="fi fi-brands-twitter"></i>
                </a>
            </div>
            <div className='navCenter'>
                <ul className='navList'>
                    <li className='navListItem'>HOME</li>
                    <li className='navListItem'>ABOUT</li>
                    <li className='navListItem'>WRITE</li>
                    <a href="https://www.pauseandthrive.xyz/" className="meditation-page" target="_blank">
                        <li className='navListItem'>MEDITATION</li>
                    </a>
                    <li className='navListItem'>RESOURCES</li>
                </ul>
            </div>
            <div className='navRight'>
                <img className='logo'
                    src={logo}
                    alt="personal blog logo"
                />
            </div>
        </div >
    );
}
