import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faJava
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='container about-page'>
                <br />
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={aboutArray}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am in my 3rd year of a 5 year Integrated Masters course in Computer Science at Trinity College Dublin,
                        with a strong interest in software development and fintech. I am passionate about learning and committed
                        to producing top-quality results. I aim to further my experience  and deepen my skills in software engineering by pursuing internship
                        opportunities in the future.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava} color="#f89820" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Loader type='pacman' /> */}
        </>
    )
}

export default About
