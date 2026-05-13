import React, { useEffect, useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTimes, FaExternalLinkAlt, FaCode, FaBriefcase, FaGraduationCap, FaLaptopCode, FaAward, FaCogs, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
import Waves from './components/Waves';
import Aurora from './components/Aurora';
import ContactForm from './components/ContactForm';
import ScrollAnimation from './components/ScrollAnimation';
import TypeWriter from './components/TypeWriter';

const App = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
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
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-links">
            <a href="#journey" className="nav-item">Experience</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#education" className="nav-item">Education</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#publications" className="nav-item">Certifications</a>
            <a href="#contact" className="nav-item">Contact</a>
          </div>
        </div>
      </nav>
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
            <img src="/assets/memo.gif" alt="Memoji Animation" />
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
              text="Software Engineer specialized in building scalable backend systems, enterprise-grade Generative AI, RAG-based LLM applications, and agentic AI platforms."
              delay={30}
              className="subtitle"
            />
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a className="btn primary" href="/assets/ResumeManavi.pdf" target="_blank">View Resume</a>
              <a className="btn secondary" href="#projects">View Projects</a>
            </motion.div>
          </motion.div>
        </div>
        <motion.a 
          href="#journey"
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span>Scroll Down</span>
          <FaChevronDown />
        </motion.a>
      </section>

      <section id="journey" className="section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2><FaBriefcase className="header-icon" /> Experience</h2>
          <p>My professional journey and technical expertise</p>
        </motion.div>
        <motion.div 
          className="experience-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Imagineer – Graduate Engineer - Generative AI</h3>
                <p className="experience-company">Fractal Analytics, Pune</p>
              </div>
              <span className="experience-date">Aug 2025 – Present</span>
            </div>
            <ul className="experience-description">
              <li>Designed and deployed scalable backend systems integrating Generative AI solutions using Azure OpenAI, Cognitive Search, and Azure Machine Learning for enterprise-grade automation.</li>
              <li>Architected RAG-based LLM systems with optimized retrieval pipelines and caching strategies, improving response latency and contextual accuracy.</li>
              <li>Developed high-throughput RESTful APIs for LLM-powered applications, ensuring scalability, reliability, and seamless operation across distributed systems.</li>
              <li>Implemented asynchronous processing and integrated observability using OpenTelemetry and Kibana for distributed tracing, logging, and system diagnostics.</li>
              <li>Owned end-to-end module lifecycle and leveraged CrewAI for agent orchestration, optimizing production systems for fault tolerance, high availability, and performance.</li>
              <li>Designed and optimized prompt pipelines for LLM-based applications, improving contextual accuracy and response quality.</li>
            </ul>
            <div className="experience-tech">
              <span className="tech-tag">Azure OpenAI</span>
              <span className="tech-tag">Cognitive Search</span>
              <span className="tech-tag">CrewAI</span>
              <span className="tech-tag">RAG & LLMs</span>
              <span className="tech-tag">OpenTelemetry</span>
              <span className="tech-tag">FastAPI</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Data Engineer Intern</h3>
                <p className="experience-company">Dataeaze Systems, Pune</p>
              </div>
              <span className="experience-date">Jan 2025 – Jul 2025</span>
            </div>
            <ul className="experience-description">
              <li>Designed scalable ETL workflows using Apache Spark and Hadoop, processing large-scale datasets for analytics and machine learning pipelines.</li>
              <li>Built and orchestrated cloud-native data pipelines using AWS Glue and AWS services, improving data processing efficiency.</li>
              <li>Optimized SQL and NoSQL databases by tuning queries and indexes, improving performance and reducing latency.</li>
              <li>Developed backend components using Spring Boot and Java within microservices architecture.</li>
              <li>Ensured system reliability and fault tolerance through CI/CD pipelines in distributed environments.</li>
            </ul>
            <div className="experience-tech">
              <span className="tech-tag">Apache Spark</span>
              <span className="tech-tag">Hadoop</span>
              <span className="tech-tag">AWS Glue</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">CI/CD</span>
            </div>
          </motion.div>


          <motion.div variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Software Development Intern</h3>
                <p className="experience-company">Tata Technologies, Pune</p>
              </div>
              <span className="experience-date">Aug 2023 – Oct 2023</span>
            </div>
            <ul className="experience-description">
              <li>Developed scalable backend APIs and microservices using Java and Spring Boot, ensuring high performance and maintainability.</li>
              <li>Built an AI-powered PDF answering system using NLP and machine learning for automated query resolution.</li>
              <li>Optimized backend services and improved performance through debugging and efficient API design.</li>
              <li>Collaborated with cross-functional teams to deploy production-ready applications.</li>
            </ul>
            <div className="experience-tech">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">Microservices</span>
              <span className="tech-tag">NLP</span>
              <span className="tech-tag">API Design</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2><FaCogs className="header-icon" /> Skills</h2>
          <p>Technical expertise and tools I work with</p>
        </motion.div>
        <motion.div 
          className="skills-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} className="skills-category">
              <h3>Languages</h3>
              <div className="skills-list">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">GoLang</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">C</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} className="skills-category">
              <h3>Frameworks</h3>
              <div className="skills-list">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Angular</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Hibernate</span>
                <span className="skill-tag">Microservices</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} className="skills-category">
              <h3>AI & ML</h3>
              <div className="skills-list">
                <span className="skill-tag">Generative AI</span>
                <span className="skill-tag">LLMs</span>
                <span className="skill-tag">RAG</span>
                <span className="skill-tag">Agentic AI</span>
                <span className="skill-tag">Prompt Eng.</span>
                <span className="skill-tag">CrewAI</span>
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">Transformers</span>
                <span className="skill-tag">TensorFlow</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} className="skills-category">
              <h3>DevOps & Cloud</h3>
              <div className="skills-list">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Git/GitHub</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">SonarQube</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} className="skills-category">
              <h3>Databases</h3>
              <div className="skills-list">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Oracle</span>
                <span className="skill-tag">NoSQL</span>
                <span className="skill-tag">Redis</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} className="skills-category">
              <h3>Technical Core</h3>
              <div className="skills-list">
                <span className="skill-tag">REST API Design</span>
                <span className="skill-tag">Kafka</span>
                <span className="skill-tag">Distributed Systems</span>
                <span className="skill-tag">Agile / SDLC</span>
                <span className="skill-tag">Debugging</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section id="education" className="section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2><FaGraduationCap className="header-icon" /> Education</h2>
          <p>My academic journey</p>
        </motion.div>
        <motion.div 
          className="education-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div whileHover={{ y: -5 }} className="education-card btech" style={{ width: '100%' }}>
            <div className="education-header">
              <div className="education-year">Sept 2021 – June 2025</div>
              <div className="education-content">
                <h3>Bachelors Of Technology in Computer Science Engineering</h3>
                <p className="education-institution">Vellore Institute of Technology, Vellore</p>
                <p className="education-specialization">Specialization in Bioinformatics</p>
              </div>
            </div>
            <div className="education-coursework">
              <h4 style={{ margin: '1.5rem 0 0.5rem 0', color: '#ed7c53', fontSize: '1.1rem' }}>Key Coursework</h4>
              <div className="course-grid">
                <span className="course-tag">Operating Systems</span>
                <span className="course-tag">Data Structures and Algorithms</span>
                <span className="course-tag">Artificial Intelligence</span>
                <span className="course-tag">Computer Network</span>
                <span className="course-tag">Database Management Systems</span>
                <span className="course-tag">Design and Analysis of Algorithms</span>
                <span className="course-tag">Object Oriented Design Programming</span>
                <span className="course-tag">Compiler Design</span>
                <span className="course-tag">Cryptography</span>
                <span className="course-tag">Discrete Mathematics</span>
                <span className="course-tag">Statistics</span>
                <span className="course-tag">Data Analytics</span>
                <span className="course-tag">Analytical Bioinformatics</span>
                <span className="course-tag">Software Engineering</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2><FaLaptopCode className="header-icon" /> Projects</h2>
          <p>Some of my recent work and personal projects</p>
        </motion.div>
        <motion.div 
          className="projects-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="project-card">
            <div className="project-content">
              <h3 className="project-title">NxtCure - Clinical Trial Matching Platform</h3>
              <p className="project-description">
                <strong>Backed by YC26 SUMMER AND ANTLER25.</strong> Developed a full-stack clinical trial matching platform to connect patients with relevant trials based on medical profiles. Designed intelligent matching pipelines using NLP and LLM-based processing to analyze patient data against 30,000+ trials with 93% accuracy. Built scalable backend services deployed on GCP with Docker and delivered an end-to-end product including a live iOS mobile application.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React & iOS</span>
                <span className="tech-tag">GCP</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">LLMs & NLP</span>
                <span className="tech-tag">HIPAA Compliance</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/manavidubey/nxtcure" className="project-link" onClick={(e) => {
                  e.preventDefault();
                  openModal('project', {
                    title: 'NxtCure - Clinical Trial Matching Platform',
                    description: 'Backed by YC26 SUMMER AND ANTLER25. A HIPAA-compliant full-stack clinical trial matching platform designed to connect patients with clinical trials through NLP and LLM-based processing.',
                    details: 'Backed by YC26 SUMMER AND ANTLER25. Architected an intelligent matching pipeline querying 30,000+ clinical trials. Built highly scalable RESTful APIs deployed on GCP via Docker. Developed and deployed both a responsive web dashboard and a production-ready iOS application live on the App Store.',
                    techStack: ['React', 'FastAPI', 'GCP', 'Docker', 'NLP', 'LLMs', 'iOS Swift', 'HIPAA Design']
                  });
                }}>
                  <FaExternalLinkAlt /> View Details
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="project-card">
            <div className="project-content">
              <h3 className="project-title">Email Helper - Agentic AI Mail Assistant</h3>
              <p className="project-description">
                Built an AI-powered email assistant as a Chrome Extension integrated with Gmail to automate email summarization, prioritization, and response drafting. Implemented multi-agent orchestration using CrewAI for autonomous task execution like TL;DR generation and action item extraction. Built serverless backend using FastAPI deployed on Google Cloud Run.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Chrome Extension</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">CrewAI</span>
                <span className="tech-tag">Google Cloud Run</span>
                <span className="tech-tag">Agentic AI</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/manavidubey/email-helper" className="project-link" onClick={(e) => {
                  e.preventDefault();
                  openModal('project', {
                    title: 'Email Helper - Agentic AI Mail Assistant',
                    description: 'A productivity Chrome Extension powered by agentic AI workflows for email summarization and automated response generation.',
                    details: 'Leveraged CrewAI for orchestrating multiple AI agents capable of parsing emails, extracting action items, and drafting contextually accurate replies. Integrated client extension with serverless FastAPI endpoints deployed on Google Cloud Run.',
                    techStack: ['Chrome Ext V3', 'FastAPI', 'CrewAI', 'GCP Cloud Run', 'LLMs', 'React']
                  });
                }}>
                  <FaExternalLinkAlt /> View Details
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="project-card">
            <div className="project-content">
              <h3 className="project-title">PDF Answering Bot</h3>
              <p className="project-description">
                Built an AI-powered document query system to extract and answer questions from PDF files using NLP and Large Language Models. Designed RAG-based pipelines for document parsing, embedding, and query processing, improving response accuracy. Developed RESTful APIs to support structured data exchange in JSON and XML formats.
              </p>
              <div className="project-tech">
                <span className="tech-tag">RAG</span>
                <span className="tech-tag">LLMs</span>
                <span className="tech-tag">NLP</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">Vector DB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/manavidubey/pdf-answering-bot" className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Repo
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="project-card">
            <div className="project-content">
              <h3 className="project-title">BlockLocator - Fund Trailing & Anomaly Detection</h3>
              <p className="project-description">
                Developed a web-based application for fund flow analysis and fraud detection, enabling tracking and backtracking of financial transactions to identify potential money laundering patterns. Integrated blockchain (Solidity) for secure and transparent transaction tracking, ensuring data integrity and built full-stack React + Flask platform.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Solidity</span>
                <span className="tech-tag">Blockchain</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">DataViz</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/manavidubey/blocklocator" className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Repo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="publications" className="section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2><FaAward className="header-icon" /> Publications & Certifications</h2>
          <p>Key professional recognitions, research contributions, and certifications</p>
        </motion.div>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="experience-card" style={{ cursor: 'default' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#ed7c53' }}>Publication & Certifications</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#fff' }}>AI Detection of Skin Cancer Using Dermascopy Images</strong>
                <p style={{ margin: '0.2rem 0', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>Sivakumar V, Manavi Dubey. International Journal of Advance Computational Engineering and Networking (IJACEN), Vol. 13, Issue 1, pp. 184–190.</p>
                <a href="http://ijacen.iraj.in/paper_detail.php?paper_id=21893" target="_blank" rel="noopener noreferrer" style={{ color: '#ed7c53', textDecoration: 'none', fontSize: '0.9rem' }}>View Paper →</a>
              </li>
              <li>
                <strong style={{ color: '#fff' }}>IBM RAG and Agentic AI Professional Certificate</strong>
                <p style={{ margin: '0.2rem 0', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>Issued Mar 2026. Focus: Generative AI, Retrieval-Augmented Generation (RAG), and Agentic AI Systems.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="experience-card" style={{ cursor: 'default' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#ed7c53' }}>Awards & Recognitions</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '1.2rem' }}>
                <strong style={{ color: '#fff' }}>Leadership - Events Head at Dream Merchants, VIT</strong>
                <p style={{ margin: '0.2rem 0', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>Organized "Stockastic", a large-scale stock simulation platform scaling to 1000+ registered users.</p>
              </li>
              <li style={{ marginBottom: '1.2rem' }}>
                <strong style={{ color: '#fff' }}>Hackathons</strong>
                <p style={{ margin: '0.2rem 0', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>• Innoverse: Second Runner Up (Mozilla Firefox Club & IEEE ITS)<br/>• Hack4Impact: Second Runner Up (IEEE CS & BIF)</p>
              </li>
              <li>
                <strong style={{ color: '#fff' }}>Volunteering & Leadership</strong>
                <p style={{ margin: '0.2rem 0', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>Senior Core Committee Member at clubs like IEEE CS, Apple Developers Group. Volunteer teacher at NGO SNEH & Udayan Care.</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
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