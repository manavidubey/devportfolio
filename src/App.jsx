import React, { useEffect, useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTimes, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Waves from './components/Waves';
import Aurora from './components/Aurora';
import ContactForm from './components/ContactForm';
import ScrollAnimation from './components/ScrollAnimation';
import TypeWriter from './components/TypeWriter';

const App = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => {
        if (section && section.nodeType === 1) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const openModal = (type, content) => {
    setModalContent(content);
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalContent(null);
  };

  const renderModal = () => {
    if (!activeModal || !modalContent) return null;

    return (
      <div className={`modal ${activeModal ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h3>{modalContent.title}</h3>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
          </div>
          <div className="modal-body">
            {modalContent.description && <p className="description">{modalContent.description}</p>}
            {modalContent.details && <div className="details">{modalContent.details}</div>}
            {modalContent.techStack && (
              <ul className="tech-stack">
                {modalContent.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <ScrollAnimation />
      <Aurora
        colorStops={["#000203", "#210524", "#c75780", "#ed7c53"]}
        blend={0.8}
        amplitude={1.5}
        speed={0.3}
      />
      <Waves
        lineColor="rgba(69, 17, 40, 0.15)"
        backgroundColor="transparent"
        waveSpeedX={0.015}
        waveSpeedY={0.008}
        waveAmpX={25}
        waveAmpY={12}
        friction={0.9}
        tension={0.01}
        maxCursorMove={80}
        xGap={16}
        yGap={40}
      />

      <div className="social-sidebar">
        <a href="https://github.com/manavidubey" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/manavi-dubey/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/u/manavidubey/" target="_blank" rel="noopener noreferrer">
          <FaCode />
        </a>
        <a href="mailto:manavidubey@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <section id="home" className="section">
        <div className="home-content">
          <motion.div 
            className="home-video"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="/src/assets/memo.gif" alt="Memoji Animation" />
          </motion.div>
          <motion.div 
            className="home-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I'm Manavi Dubey!
            </motion.h1>
            <TypeWriter 
              text="I'm a final-year Computer Engineering student at VIT, passionate about AI, Software Development, and solving sreal-world problems through technology."
              delay={30}
              className="subtitle"
            />
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a className="btn primary" href="/src/assets/ResumeManavi.pdf" target="_blank">View Resume</a>
              <a className="btn secondary" href="#projects">View Projects</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="journey" className="section">
        <div className="section-header">
          <h2>Experience</h2>
          <p>My professional journey and technical expertise</p>
        </div>
        <div className="experience-container">
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Data Engineer Intern</h3>
                <p className="experience-company">Dataeaze Systems, Pune</p>
              </div>
              <span className="experience-date">Jan 2025 – Present</span>
            </div>
            <ul className="experience-description">
              <li>Developed ETL workflows and managed SQL/NoSQL databases using AWS, Azure, and GCP.</li>
              <li>Developed and automated scalable data pipelines using Apache Spark, Hadoop, and Airflow for distributed
                data processing, supporting data science workflows, contributing directly to end-to-end product development.</li>
              <li>Worked on full-stack development (frontend, backend) and design patterns for internal tools, gaining
                understanding of industry standards.</li>
            </ul>
            <div className="experience-tech">
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">SQL & NoSQL</span>
              <span className="tech-tag">ReactJS</span>
              <span className="tech-tag">Apache Spark</span>
              <span className="tech-tag">Hadoop</span>
              <span className="tech-tag">Full-Stack Development</span>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Data Analyst Intern</h3>
                <p className="experience-company">YMoney, Vellore</p>
              </div>
              <span className="experience-date">Nov 2023 – May 2024</span>
            </div>
            <ul className="experience-description">
              <li>Conducted data analysis on large datasets to identify trends using Python, SQL, and relational databases;
                managed data collection, storage, and retrieval for efficient querying.</li>
              <li>Developed and predicted data visualizations, improved data quality with normalization and reports to
                support decision-making processes and collaborated with other teams for optimal results.</li>
            </ul>
            <div className="experience-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">SQL</span>
              <span className="tech-tag">Relational Databases</span>
              <span className="tech-tag">Data Visualization</span>
              <span className="tech-tag">Data Normalization</span>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Software Development Intern</h3>
                <p className="experience-company">Tata Technologies, Pune</p>
              </div>
              <span className="experience-date">Aug 2023 – Oct 2023</span>
            </div>
            <ul className="experience-description">
              <li>Developed a PDF AI answering bot using NLP and machine learning to automate query responses, performing
                research to identify the best models and writing efficient code for accurate information extraction.</li>
              <li>Collaborated in an agile environment through the Software Development Life Cycle (SDLC), enhancing
                technical, problem-solving, and coding skills while continuously improving the solution.</li>
              <li>Presented the project to stakeholders, receiving positive feedback for innovation, communication,
                and the effective use of AI technologies.</li>
            </ul>
            <div className="experience-tech">
              <span className="tech-tag">NLP</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Agile</span>
              <span className="tech-tag">SDLC</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-header">
          <h2>Skills</h2>
          <p>Technical expertise and tools I work with</p>
        </div>
        <div className="skills-card">
          <div className="skills-grid">
            <div className="skills-category">
              <h3>Languages</h3>
              <div className="skills-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Frontend</h3>
              <div className="skills-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Framer Motion</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Backend</h3>
              <div className="skills-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Data & AI</h3>
              <div className="skills-list">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Deep Learning</span>
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">Computer Vision</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Cloud & DevOps</h3>
              <div className="skills-list">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">GCP</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">CI/CD</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Databases</h3>
              <div className="skills-list">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-header">
          <h2>Education</h2>
          <p>My academic journey</p>
        </div>
        <div className="education-container">
          <div className="education-card">
            <div className="education-header">
              <div className="education-year">2019</div>
              <div className="education-content">
                <h3>10th Grade</h3>
                <p className="education-institution">Global Indian International School</p>
                <p className="education-score">88.2%</p>
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-header">
              <div className="education-year">2021</div>
              <div className="education-content">
                <h3>12th Grade</h3>
                <p className="education-institution">Namo Rims Junior College</p>
                <p className="education-score">92.8%</p>
              </div>
            </div>
          </div>

          <div className="education-card btech">
            <div className="education-header">
              <div className="education-year">2021 - 2025</div>
              <div className="education-content">
                <h3>B.Tech in Computer Science</h3>
                <p className="education-institution">Vellore Institute of Technology</p>
                <p className="education-specialization">Specialization in Bioinformatics</p>
              </div>
            </div>
            <div className="education-coursework">
              <div className="course-grid">
                <span className="course-tag">Operating Systems</span>
                <span className="course-tag">Data Structures</span>
                <span className="course-tag">AI/ML</span>
                <span className="course-tag">Computer Networks</span>
                <span className="course-tag">DBMS</span>
                <span className="course-tag">DAA</span>
                <span className="course-tag">OOP</span>
                <span className="course-tag">Compiler Design</span>
                <span className="course-tag">Cryptography</span>
                <span className="course-tag">Discrete Math</span>
                <span className="course-tag">Statistics</span>
                <span className="course-tag">Data Analytics</span>
                <span className="course-tag">Bioinformatics</span>
                <span className="course-tag">Software Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Some of my recent work and personal projects</p>
        </div>
        <div className="projects-container">
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">PDF AI Answering Bot</h3>
              <p className="project-description">
                Developed an AI-powered bot using Python notebook frameworks to automatically extract and respond
                to queries from PDF documents, leveraging natural language processing (NLP) and large language models
                (LLMs) to accurately process and answer questions.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">NLP</span>
                <span className="tech-tag">LLMs</span>
                <span className="tech-tag">Object Oriented Design</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/manavidubey/pdf" className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Details
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Attentio - Facial Expression Analysis for Psychological Disorders</h3>
              <p className="project-description">
                Developed an application to analyze facial expressions from videos and identify psychological disorders by
                implementing computer vision algorithms and utilizing machine learning and deep learning techniques for
                accurate emotion detection and disorder classification, aimed at improving diagnostic accuracy and providing
                early intervention opportunities for mental health professionals.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Computer Vision</span>
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">Deep Learning</span>
                <span className="tech-tag">ReactJs</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">SaaS</span>
                <span className="tech-tag">User Experience</span>
                <span className="tech-tag">Debugging</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/manavidubey/Attentio" className="project-link" onClick={(e) => {
                  e.preventDefault();
                  openModal('project', {
                    title: 'Attentio - Understanding Facial Expressions',
                    description: 'An innovative application that analyzes facial expressions from videos to identify potential psychological disorders using computer vision and AI techniques.',
                    details: 'This project involves the development of computer vision algorithms to process video feeds, extract facial features, and employ machine learning and deep learning models to detect emotions and classify potential psychological disorders. The application aims to provide mental health professionals with a tool for early intervention. The frontend is built with ReactJs and the UI/UX was designed using Figma. The application follows a SaaS model and involved significant debugging efforts.',
                    techStack: ['Python', 'Computer Vision', 'Machine Learning', 'Deep Learning', 'ReactJs', 'Figma', 'SaaS', 'User Experience (UX)', 'Debugging']
                  });
                }}>
                  <FaExternalLinkAlt /> View Details
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">BlockLocator - Fund Trailing & Anomaly Detection</h3>
              <p className="project-description">
                Developed a web application to analyze fund trails, fraud detection and backtrack transactions, aiming to
                detect potential money laundering. It uses advanced algorithms for tracking fund flows, integrates blockchain
                for secure tracking, and offers an intuitive interface for interactive data visualization and analysis.
              </p>
              <div className="project-tech">
                <span className="tech-tag">BlockChain-Solidity</span>
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">ReactJs</span>
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/manavidubey/blocklocator" className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Get in Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
            <div className="contact-details">
              <p><strong>Email:</strong> manavidubey@gmail.com</p>
              <p><strong>Location:</strong> Pune, India</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {renderModal()}
    </div>
  );
};

export default App;