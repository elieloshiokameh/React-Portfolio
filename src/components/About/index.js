import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCode, faBook } from '@fortawesome/free-solid-svg-icons';
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
import '../../styles.scss'

const About = () => {
    return (
        <div className="about-page">
            <div className="text-zone">
                <div className="resume-section">
                    <h2>Education</h2>
                    <div className="experience-item">
                        <div className="company-header">
                            <h3>Trinity College Dublin</h3>
                            <span className="date">September 2021 – May 2025</span>
                        </div>
                        <div className="location">Dublin, IE</div>
                        <ul>
                            <li>B.A. (Mod) Honours in Computer Science, First Class Honours (expected)</li>
                        </ul>
                    </div>
                </div>

                <div className="resume-section">
                    <h2>Experience</h2>
                    <div className="experience-item">
                        <div className="company-header">
                            <h3>IBM</h3>
                            <span className="date">January 2025 - Present</span>
                        </div>
                        <div className="location">Software Engineering Intern, Dublin, IE</div>
                        <ul>
                            <li>Currently interning on the networking team, contributing to software development and testing processes.</li>
                            <li>Authored 50+ unit tests, significantly enhancing the reliability and quality of the networking team's software.</li>
                            <li>Created comprehensive documentation outlining best practices for writing unit tests within the organization.</li>
                            <li>Implemented an automated system for updating documentation with new releases, resulting in an over 80% reduction in process time.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="company-header">
                            <h3>J.P. Morgan Chase & Co</h3>
                            <span className="date">June 2024 – August 2024</span>
                        </div>
                        <div className="location">Software Engineer Intern, Dublin, IE</div>
                        <ul>
                            <li>Developed a full-stack application integrating React (UI), Spring Boot (backend), and Oracle DB.</li>
                            <li>Designed and deployed a responsive, dynamic UI using React, enhancing user experience.</li>
                            <li>Implemented scalable APIs and services with Spring Boot, ensuring high availability.</li>
                            <li>Optimized database interactions in Oracle DB, improving data retrieval speed by 15%.</li>
                            <li>Deployed with Amazon EKS, enabling efficient container orchestration and scaling.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="company-header">
                            <h3>Microsoft</h3>
                            <span className="date">January 2023 – April 2023</span>
                        </div>
                        <div className="location">Student Software Engineer, Dublin, IE</div>
                        <ul>
                            <li>Developed an open-source, pluggable login and authentication module.</li>
                            <li>Designed and built an administration portal using Vue.js with real-time updates.</li>
                            <li>Visualized account management data in an SQL database, enhancing data accessibility.</li>
                            <li>Optimized SQL database queries, improving application performance by 25%.</li>
                            <li>Authored comprehensive documentation for technical processes.</li>
                        </ul>
                    </div>
                </div>

                <div className="resume-section">
                    <h2>Additional Activities</h2>
                    <div className="experience-item">
                        <div className="company-header">
                            <h3>Trinity College Dublin</h3>
                            <span className="date">September 2024 – Present</span>
                        </div>
                        <div className="location">Laboratory Demonstrator, Dublin, IE</div>
                        <ul>
                            <li>Instructed and supervised undergraduate students in linear algebra.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="company-header">
                            <h3>Google BGN Hackathon</h3>
                            <span className="date">October 2024</span>
                        </div>
                        <div className="location">WelcomeBlack App, Dublin, IE</div>
                        <ul>
                            <li>Developed and showcased an MVP for the WelcomeBlack app, an AI-powered platform for African diaspora descendants.</li>
                        </ul>
                    </div>
                </div>

                <div className="resume-section">
                    <h2>Technical Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Languages</h3>
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>Go</li>
                                <li>JavaScript</li>
                                <li>HTML/CSS</li>
                                <li>SQL (MySQL, PostgreSQL)</li>
                                <li>C</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>Frameworks</h3>
                            <ul>
                                <li>React</li>
                                <li>Angular</li>
                                <li>Vue</li>
                                <li>Spring Boot</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>Developer Tools</h3>
                            <ul>
                                <li>Git</li>
                                <li>Terraform</li>
                                <li>Jira</li>
                                <li>Docker</li>
                                <li>Kubernetes</li>
                                <li>Oracle DBMS</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>Relevant Coursework</h3>
                            <ul>
                                <li>Algorithms & Data Structures</li>
                                <li>OOP</li>
                                <li>Operating Systems</li>
                                <li>Internet Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
