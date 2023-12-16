import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import './index.scss'
import PortfolioImage from '../../assets/images/portfolioImageModified.png'

const Home = () => {


    return (
        <div className="container home-page">
            <br /> <br />
            <span className="introduction" >
                <h1>Hi, I am
                    <br />
                    Eliel Oshiokameh
                    <br />
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
    );
}

export default Home