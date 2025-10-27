import React, { useRef, useState } from 'react';
import './Portfolio.css';

import onlineAttendance from '../assets/attendance.webp';
import cropReccomendation from '../assets/crop.webp';
import pestDetection from '../assets/pestdetection.webp';
import coldMail from '../assets/coldmail.webp';
import cache from '../assets/cache.webp';
import compiler from '../assets/compiler.webp';
import aws from '../assets/AWS Course.webp';
import goldmansachs from '../assets/goldman.webp';
import drdo from '../assets/drdo.webp';
import salseforce from '../assets/salseforce.webp';
import vikistBharat from '../assets/Viksit Bharat Participants.webp';
import aws2 from '../assets/AWS Skill Builder Course.webp';
import Navbar from './Navbar';

import reactLogo from '../assets/react.webp';
import pythonLogo from '../assets/python.webp';
import jsLogo from '../assets/Javascript.webp';
import awsLogo from '../assets/aws.webp';
import htmlLogo from '../assets/html.webp';
import cssLogo from '../assets/css.webp';
import githubLogo from '../assets/github.webp';
import cpp from '../assets/cpp.webp';
import nodejs from '../assets/node.webp';
import opencv from '../assets/opencv.webp';
import sql from '../assets/sql.webp';
import cnn from '../assets/cnn.webp';
import pandas from '../assets/pandas.webp';
import matplotlib from '../assets/matplotlib.webp';


const Portfolio = () => {
    const [selectedCert, setSelectedCert] = useState(null); // popup state
    const scrollRef = useRef(null);

    const projects = [
        { title: 'AI Powered Pest Detection System', description: 'Detects and identifies crop pests using image recognition and deep learning.', image: pestDetection, link: 'https://github.com/parampreetchahal/Pest_Detection_EfficentNet_Model.git' },
        { title: 'Cold Mail Genrator & Sender', description: 'Automates personalized email generation and delivery using AI-driven templates.', image: coldMail, link: 'https://github.com/parampreetchahal/ColdMailGenrator-Sender.git' },
        { title: 'Crop Reccomendation System', description: 'Suggests the most suitable crops based on soil and environmental parameters.', image: cropReccomendation, link: 'https://github.com/parampreetchahal/AI-Based-Crop-Recommendation-templates.git' },
        { title: 'Online Class/Meeting Attendance System', description: 'Calculates student attendance automatically from CSV reports.', image: onlineAttendance, link: 'https://github.com/parampreetchahal/Online-Attendance-Taker.git' },
        { title: 'Cache Management Simulation', description: 'Interactive LRU Cache Visualizer demonstrating LRU cache operations with real-time updates.', image: cache, link: 'https://github.com/parampreetchahal/CacheManagement.git' },
        { title: 'Fuzzing In Compiler', description: 'Tests compiler robustness by generating random inputs to detect crashes and inconsistencies.', image: compiler, link: 'https://github.com/parampreetchahal/FuzzingInCompiler.git' }
    ];

    const certificates = [
        { title: 'AWS Cloud Practitioner Essentials', description: 'Acquired core understanding of AWS cloud architecture, services, and best practices.', image: aws },
        { title: 'Software Engineering Job Simulation', description: 'Simulated real-world engineering tasks focusing on problem-solving and security analysis.', image: goldmansachs },
        { title: 'Certificate of Student Training at DRDO(IRDE)', description: 'Completed hands-on training in advanced optical and defense research technologies.', image: drdo },
        { title: 'Salesforce Developer With Agentblazer Champion ', description: 'Learned to build and deploy scalable applications on the Salesforce platform.', image: salseforce },
        { title: 'AWS ML Engineer Associate Curriculum Overview', description: 'Gained foundational knowledge of machine learning concepts and AWS ML services.', image: aws2 },
        { title: 'Viksit Bharat Participants', description: 'Remarkable leadership and path breaking ideaspresented at the Viksit Bharat Young Leaders Dialogueat Bharat Mandapam, Delhi.', image: vikistBharat }

    ];

    const skills = [
        { name: 'React', image: reactLogo },
        { name: 'Python', image: pythonLogo },
        { name: 'JavaScript', image: jsLogo },
        { name: 'AWS', image: awsLogo },
        { name: 'HTML', image: htmlLogo },
        { name: 'CSS', image: cssLogo },
        { name: 'GitHub', image: githubLogo },
        { name: 'C++', image: cpp },
        { name: 'Node.js', image: nodejs },
        { name: 'OpenCV', image: opencv },
        { name: 'SQL', image: sql },
        { name: 'CNN', image: cnn },
        { name: 'Matplotlib', image: matplotlib },
        { name: 'Pandas', image: pandas }
    ];


    const handleKeyDown = (e) => {
        if (scrollRef.current) {
            if (e.key === 'ArrowRight') scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            if (e.key === 'ArrowLeft') scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="portfolio-wrapper" tabIndex={0} onKeyDown={handleKeyDown}>
                <div className="portfolio-container">
                    <h1>Projects</h1>
                    <div className="projects-carousel" ref={scrollRef}>
                        {projects.map((project, index) => (
                            <div className="project-card" key={index}>
                                {project.image && <img src={project.image} alt={project.title} />}
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="portfolio-container">
                    <h1>Certificates</h1>
                    <div className="projects-carousel">
                        {certificates.map((cert, index) => (
                            <div className="project-card" key={index}>
                                {/*{cert.image && <img src={cert.image} alt={cert.title} />}*/}
                                <h3>{cert.title}</h3>
                                <p>{cert.description}</p>
                                <button onClick={() => setSelectedCert(cert)}>View Certificate</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="portfolio-container">
                    <h1>Skills</h1>
                    <div className="skills-honeycomb">
                        {skills.map((skill, index) => (
                            <div className="hex" key={index}>
                                <img src={skill.image} alt={skill.name} />
                            </div>
                        ))}
                    </div>
                </div>




                {/* Modal Popup */}
                {selectedCert && (
                    <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h2>{selectedCert.title}</h2>
                            {selectedCert.image && <img src={selectedCert.image} alt={selectedCert.title} />}
                            <p>{selectedCert.description}</p>
                            <button onClick={() => setSelectedCert(null)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Portfolio;
