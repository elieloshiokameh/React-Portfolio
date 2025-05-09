import '../../styles.scss'
import { Link } from 'react-router-dom'
import LogoE from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const navRef = useRef(null);

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setShowNav(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setShowNav(false);
    };

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoE} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="eliel" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''} ref={navRef}>
                <Link to="/" className="nav-link" onClick={handleLinkClick}>
                    Home
                </Link>

                <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                    About
                </Link>

                <Link to="/blog" className="nav-link" onClick={handleLinkClick}>
                    Blog
                </Link>

                <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
                    Contact
                </Link>

                <div className="theme-toggle" onClick={toggleTheme}>
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} color="#4d4d4e" />
                </div>
            </nav>
            <div className="hamburger-menu" onClick={() => setShowNav(!showNav)}>
                <FontAwesomeIcon icon={showNav ? faClose : faBars} color="#4d4d4e" />
            </div>
        </div>
    )
}

export default Sidebar
