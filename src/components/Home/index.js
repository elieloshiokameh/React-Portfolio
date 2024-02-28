import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import './index.scss'
import PortfolioImage from '../../assets/images/portfolioImageModified.png'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const Home = () => {

    const [letterClass] = useState('text-animate')
    const introductionArray = [
        'E', 'l', 'i', 'e', 'l', ' ',
        'O', 's', 'h', 'i', 'o', 'k', 'a', 'm', 'e', 'h'
    ]

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLetterClass('text-animate-hover');
    //     }, 3000);

    //     return () => clearTimeout(timer);
    // }, []);

    return (<>
        <div className="container home-page">
            <img src={PortfolioImage} alt='portfoliopic' className='img' />
            <span className="introduction " >

                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I am</span>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={introductionArray}
                        idx={9}
                    />
                </h1>

            </span>
            <br />
            <div>
                <h2 className="p">
                    I am a
                </h2>

                <div className="typewriter">
                    <Typewriter
                        options={{
                            strings: ['Computer Science Student', 'Software Engineer', 'Full Stack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <br />
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        {/* <Loader type='dice' /> */}
    </>
    )
}

export default Home