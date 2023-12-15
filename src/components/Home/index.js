import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import './index.scss'
import PortfolioImage from '../../assets/images/portfolioImageModified.png'

const Home = () => {


    return (
        <div className="container home-page">
            <div className="introduction" >
                <h1>Hi, I am
                    <br />
                    Eliel Oshiokameh
                    <br />
                </h1>
                <img src={PortfolioImage} alt='portfoliopic' />

            </div>

            <h2>
                I am a
                <div className="typewriter">
                    <Typewriter
                        options={{
                            strings: ['Computer Science Student', 'Software Engineer', 'Front/BackEnd Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>


        </div>
    );
}

export default Home