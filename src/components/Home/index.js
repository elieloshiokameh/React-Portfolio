import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import '../../styles.scss'
import PortfolioImage from '../../assets/images/me.jpeg'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const introductionArray = [
        'E', 'l', 'i', 'e', 'l', ' ',
        'O', 's', 'h', 'i', 'o', 'k', 'a', 'm', 'e', 'h'
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="home-content">
                    <div className="text-zone">
                        <h1>
                            <span className={`${letterClass} _1`}>H</span>
                            <span className={`${letterClass} _12`}>i,</span>
                            <br />
                            <span className={`${letterClass} _13`}>I'm</span>
                            <br />
                            <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={introductionArray}
                                idx={9}
                            />
                        </h1>
                        <div className="role-container">
                            <h2>
                                <span className="role-text">I am a</span>
                                <div className="typewriter">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                'Computer Science Student',
                                                'Software Engineer',
                                                'Full Stack Developer',
                                                'Problem Solver'
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            deleteSpeed: 30,
                                        }}
                                    />
                                </div>
                            </h2>
                        </div>
                        <Link to="/contact" className='flat-button'>
                            CONTACT ME
                        </Link>
                    </div>
                    <div className="image-zone">
                        <img src={PortfolioImage} alt='portfoliopic' />
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home