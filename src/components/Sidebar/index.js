import '../../styles.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoE from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setShowDropdown(false);
        setShowNav(false);
    };

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoE} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="eliel" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''} ref={dropdownRef}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={handleLinkClick}
                >
                    Home
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={handleLinkClick}
                >
                    About
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="blog-link"
                    to="/blog"
                    onClick={handleLinkClick}
                >
                    Blog
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={handleLinkClick}
                >
                    Contact
                </NavLink>

                <div className="theme-toggle" onClick={toggleTheme}>
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} color="#4d4d4e" />
                </div>
            </nav>
            <div className="hamburger-menu" onClick={() => setShowDropdown(!showDropdown)}>
                <FontAwesomeIcon icon={showDropdown ? faClose : faBars} color="#4d4d4e" />
            </div>
            <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={handleLinkClick}
                >
                    Home
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={handleLinkClick}
                >
                    About
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="blog-link"
                    to="/blog"
                    onClick={handleLinkClick}
                >
                    Blog
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={handleLinkClick}
                >
                    Contact
                </NavLink>

                <div className="theme-toggle" onClick={toggleTheme}>
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} color="#4d4d4e" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
