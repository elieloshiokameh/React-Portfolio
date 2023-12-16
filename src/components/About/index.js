import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {

    return (
        <div className='container about-page'>
            <br /> <br />
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    />
                </h1>
                <p>
                    I am in my 3rd year of a 5 year Integrated Masters course in Computer Science at Trinity College Dublin,
                    with a strong interest in software development and Fintech. I am deeply passionate about learning and committed
                    to producing top-quality outcomes. I aim to enhance my experience in software engineering by pursuing internship
                    opportunities in the future.
                </p>
            </div>
        </div>
    )
}

export default About
