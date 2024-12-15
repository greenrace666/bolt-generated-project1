import React, { useState } from 'react';
    import { Link, animateScroll as scroll } from 'react-scroll';
    import { FaMoon, FaSun } from 'react-icons/fa';

    function App() {
      const [darkMode, setDarkMode] = useState(false);

      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
      };

      return (
        <div className={darkMode ? 'dark-mode' : ''}>
          <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
            <div className="container nav">
              <h1>Nikil Krishna</h1>
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={darkMode ? 'dark-mode' : ''}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={darkMode ? 'dark-mode' : ''}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={darkMode ? 'dark-mode' : ''}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={darkMode ? 'dark-mode' : ''}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={darkMode ? 'dark-mode' : ''}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={darkMode ? 'dark-mode' : ''}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="toggle-container">
                <button onClick={toggleDarkMode} className={darkMode ? 'dark-mode' : ''}>
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>
              </div>
            </div>
          </header>

          <section id="home" className="home">
            <div className="container">
              <div className="home-content">
                <h1>Nikil Krishna</h1>
                <h2>Undergraduate Student at SASTRA Deemed University</h2>
                <p>
                  Focusing on computational biology and protein design.
                </p>
                <a href="#about" className="btn">
                  Learn More
                </a>
              </div>
              <div className="home-image">
                <img src="https://placekitten.com/300/300" alt="Nikil Krishna" />
              </div>
            </div>
          </section>

          <section id="about" className="about">
            <div className="container">
              <h2>About Me</h2>
              <p>
                I am an undergraduate student at SASTRA Deemed University with a
                passion for computational biology and protein design. My academic
                journey has been driven by a desire to understand the intricate
                mechanisms of life at the molecular level.
              </p>
              <h3>Educational Background</h3>
              <div className="about-timeline">
                <div className="timeline-item">
                  <h3>SASTRA Deemed University</h3>
                  <p>
                    Undergraduate Student in Biotechnology (2021 - Present)
                  </p>
                </div>
              </div>
              <h3>Core Values</h3>
              <p>
                I believe in continuous learning, collaboration, and the
                application of innovative solutions to complex problems.
              </p>
            </div>
          </section>

          <section id="projects" className="projects">
            <div className="container">
              <h2>Achievements & Projects</h2>
              <div className="projects-grid">
                <div className={`project-card ${darkMode ? 'dark-mode' : ''}`}>
                  <h3>Project 1</h3>
                  <p>
                    A brief description of project 1.
                  </p>
                  <ul>
                    <li className={darkMode ? 'dark-mode' : ''}>React</li>
                    <li className={darkMode ? 'dark-mode' : ''}>Node.js</li>
                  </ul>
                  <a href="#" className={darkMode ? 'dark-mode' : ''}>
                    Live Demo
                  </a>
                  <a href="#" className={darkMode ? 'dark-mode' : ''}>
                    GitHub
                  </a>
                </div>
                <div className={`project-card ${darkMode ? 'dark-mode' : ''}`}>
                  <h3>Project 2</h3>
                  <p>
                    A brief description of project 2.
                  </p>
                  <ul>
                    <li className={darkMode ? 'dark-mode' : ''}>Python</li>
                    <li className={darkMode ? 'dark-mode' : ''}>TensorFlow</li>
                  </ul>
                  <a href="#" className={darkMode ? 'dark-mode' : ''}>
                    Live Demo
                  </a>
                  <a href="#" className={darkMode ? 'dark-mode' : ''}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="skills">
            <div className="container">
              <h2>Research Interests & Skills</h2>
              <div className="skills-section">
                <div className={`skill-card ${darkMode ? 'dark-mode' : ''}`}>
                  <h3>Structural Biology</h3>
                  <ul>
                    <li>
                      <div className={`progress-bar ${darkMode ? 'dark-mode' : ''}`}>
                        <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                      </div>
                      <p>Proficient</p>
                    </li>
                  </ul>
                </div>
                <div className={`skill-card ${darkMode ? 'dark-mode' : ''}`}>
                  <h3>Protein Design (Diffusion ML Models)</h3>
                  <ul>
                    <li>
                      <div className={`progress-bar ${darkMode ? 'dark-mode' : ''}`}>
                        <div className="progress-bar-fill" style={{ width: '60%' }}></div>
                      </div>
                      <p>Intermediate</p>
                    </li>
                  </ul>
                </div>
                <div className={`skill-card ${darkMode ? 'dark-mode' : ''}`}>
                  <h3>AlphaFold Hallucination</h3>
                  <ul>
                    <li>
                      <div className={`progress-bar ${darkMode ? 'dark-mode' : ''}`}>
                        <div className="progress-bar-fill" style={{ width: '50%' }}></div>
                      </div>
                      <p>Familiar</p>
                    </li>
                  </ul>
                </div>
                <div className={`skill-card ${darkMode ? 'dark-mode' : ''}`}>
                  <h3>Drug Design in Computational Biology</h3>
                  <ul>
                    <li>
                      <div className={`progress-bar ${darkMode ? 'dark-mode' : ''}`}>
                        <div className="progress-bar-fill" style={{ width: '40%' }}></div>
                      </div>
                      <p>Beginner</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="resume" className="resume-section">
            <div className="container">
              <h2>Resume</h2>
              <a href="/resume.pdf" className="btn" download>
                Download Resume
              </a>
              <p>
                A brief preview of key resume points.
              </p>
            </div>
          </section>

          <section id="social" className="social-media-section">
            <div className="container">
              <h2>Social Media & Publications</h2>
              <div className="social-media-section">
                <div className={darkMode ? 'dark-mode' : ''}>
                  <h3>Twitter</h3>
                  <p>Twitter timeline embed here</p>
                </div>
                <div className={darkMode ? 'dark-mode' : ''}>
                  <h3>LinkedIn</h3>
                  <p>LinkedIn profile widget here</p>
                </div>
                <div className={darkMode ? 'dark-mode' : ''}>
                  <h3>Blog</h3>
                  <p>Blog feed integration here</p>
                </div>
                <div className={darkMode ? 'dark-mode' : ''}>
                  <h3>Publications</h3>
                  <p>Links to publications here</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div className="container">
              <h2>Contact</h2>
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
              <p>
                Response time: 1-2 business days.
              </p>
              <p>
                Professional affiliations: SASTRA University.
              </p>
              <p>
                Location/timezone: India (GMT+5:30).
              </p>
            </div>
          </section>

          <section id="additional-info" className="additional-info-section">
            <div className="container">
              <h2>Additional Information</h2>
              <ul>
                <li>Conference presentations</li>
                <li>Research posters</li>
                <li>Academic honors</li>
                <li>Volunteer work</li>
                <li>Professional memberships</li>
              </ul>
            </div>
          </section>
        </div>
      );
    }

    export default App;
