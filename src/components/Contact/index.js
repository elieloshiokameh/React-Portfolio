import '../../styles.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLinkedin, faGithub } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin as fabLinkedin, faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const form = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            formData,
            'YOUR_PUBLIC_KEY'
        )
            .then(() => {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch(() => {
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <div className='container contact-page'>

                <div className='text-zone'>                        
                    <div className='contact-info'>
                        <div className='contact-header'>
                            <h2>Get in Touch</h2>
                            <div className='social-links'>
                                <a href='mailto:eliel.oshiokameh@gmail.com' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                                <a href='https://www.linkedin.com/in/eliel-oshiokameh' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={fabLinkedin} />
                                </a>
                                <a href='https://github.com/elieloshiokameh' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={fabGithub} />
                                </a>
                            </div>
                        </div>

                        {/* <div className='contact-details'>
                            <div className='contact-item'>
                                <FontAwesomeIcon icon={faPhone} />
                                <a href='tel:+353831295381'>+353 83 129 5381</a>
                            </div>
                            <div className='contact-item'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href='mailto:eliel.oshiokameh@gmail.com'>eliel.oshiokameh@gmail.com</a>
                            </div>
                            <div className='contact-item'>
                                <FontAwesomeIcon icon={fabLinkedin} />
                                <a href='https://www.linkedin.com/in/eliel-oshiokameh' target='_blank' rel='noopener noreferrer'>
                                    LinkedIn Profile
                                </a>
                            </div>
                            <div className='contact-item'>
                                <FontAwesomeIcon icon={fabGithub} />
                                <a href='https://github.com/elieloshiokameh' target='_blank' rel='noopener noreferrer'>
                                    GitHub Profile
                                </a>
                            </div>
                        </div> */}
                    </div>
                    <div className='contact-form'>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='text'
                                name='subject'
                                placeholder='Subject'
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                placeholder='Message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type='submit' className='flat-button' disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className='success-message'>Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className='error-message'>Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )

}

export default Contact