import { Link, NavLink } from 'react-router-dom'
import React, {useState, useEffect, useCallback} from 'react'
import LogoE from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../Layout/index.scss'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const closeSidebar = useCallback((event) => {
        if (isOpen && !event.target.closest('.nav-bar')) {
            setIsOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
            document.addEventListener('click', closeSidebar);
    
            // Cleanup function to remove the event listener when the component is unmounted
            return () => {
                document.removeEventListener('click', closeSidebar);
            };
        }, [isOpen, closeSidebar]);

    return (
        <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
            <div className='hamburger-menu' onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </div>
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
    );
}

export default Sidebar
