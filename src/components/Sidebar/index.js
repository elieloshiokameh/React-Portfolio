import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoE from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoE} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="eliel" />
        </Link>
        <nav>
            <NavLink
             exact="true" 
             activeclassname="active" 
             to="/"
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />

            </NavLink>

            <NavLink
             exact="true" 
             activeclassname="active" 
             className="about-link" 
             to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />

            </NavLink>

            <NavLink
             exact="true" 
             activeclassname="active" 
             className="contact-link" 
             to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />

            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/eliel-oshiokameh/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.github.com/elieloshiokameh/'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/eliel.oshiokameh/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar
