import '../../styles.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLinkedin, faGithub } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin as fabLinkedin, faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target);
            const response = await fetch('https://formspree.io/f/xjkwaoyl', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus('success');
                e.target.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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
                    </div>
                    <div className='contact-form'>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                required
                            />
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                required
                            />
                            <input
                                type='text'
                                name='subject'
                                placeholder='Subject'
                                required
                            />
                            <textarea
                                placeholder='Message'
                                name='message'
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