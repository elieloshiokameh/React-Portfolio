import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import './index.scss'
import PortfolioImage from '../../assets/images/portfolioImageModified.png'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const introductionArray = [
        'E', 'l', 'i', 'e', 'l', ' ',
        'O', 's', 'h', 'i', 'o', 'k', 'a', 'm', 'e', 'h'
    ]

    return (<>
        <div className="container home-page">
            <br /> <br />
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
                <img src={PortfolioImage} alt='portfoliopic' />
            </span>

            <br />

            <a>
                <div className="p">
                    <h2>
                        I am a
                    </h2>
                </div>

                <div className="typewriter">
                    <Typewriter
                        options={{
                            strings: ['Computer Science Student', 'Software Engineer', 'Front / Back End Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </a>
            <br />
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>


        </div>
        {/* <Loader type='dice' /> */}
    </>
    )
}

export default Home