import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const top = section.offsetTop - 150;
      const bottom = top + section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <div className="portfolio">

      {/* Navigation Bar */}
     <nav className="navbar">
  <h2 className="logo">KANISHKA<span>.</span>S</h2>

  <div className="nav-links">
  {['home', 'about', 'skills', 'projects', 'certifications', 'internship', 'contact'].map((section) => (
    <a
      key={section}
      href={`#${section}`}
      className={activeSection === section ? 'active' : ''}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </a>
    ))}
  </div>
</nav>

      {/* Home Section */}

      {/* Home Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="greeting">HELLO, WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Kanishka S</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="description">
            I am an M.Tech Computer Science student passionate
            about building innovative web applications and
            developing technology-driven solutions for
            real-world problems.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              Explore My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
            <a
  href="https://github.com/wwwkanishka30-del"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-btn"
>
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/kanishka-s-41343b36a/"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-btn"
>
  LinkedIn
</a>

          </div>

        </div>

        <div className="hero-image">

          <div className="profile-circle">
            KS
          </div>

          <div className="glow"></div>

        </div>

      </section>{/* About Section */}
<section className="about" id="about">

  <div className="section-heading">
    <p>GET TO KNOW ME</p>
    <h1>About <span>Me</span></h1>
  </div>

  <div className="about-content">

    <div className="about-card">
      <h2>Who Am I?</h2>

      <p>
        I am Kanishka S, currently pursuing my M.Tech
        in Computer Science and Engineering.

        I am passionate about software development,
        web technologies and artificial intelligence.

        I enjoy building practical applications that
        solve real-world problems and continuously
        improving my technical skills.
      </p><a
  href="/Kanishka_Resume.pdf"
  download="Kanishka_Resume.pdf"
  className="resume-btn"
>
  Download My Resume
</a>
    </div>

    <div className="education-card">
      <h2>Education</h2>

      <div className="education-item">
        <h3>M.Tech - Computer Science</h3>
        <p>SKCET</p>
        <span>Currently Pursuing</span>
      </div>

      <div className="education-item">
        <h3>Higher Secondary Education</h3>
        <p>12th Standard</p>
        <span>Completed</span>
      </div>

    </div>

  </div>

</section>{/* Skills Section */}
<section className="skills-section" id="skills">

  <div className="section-heading">
    <p>WHAT I KNOW</p>
    <h1>Technical <span>Skills</span></h1>
  </div>

  <div className="skills-container">

    <div className="skill-card">
      <h2>💻</h2>
      <h3>Programming</h3>
      <p>Python</p>
      <p>Java</p>
      <p>JavaScript</p>
    </div>

    <div className="skill-card">
      <h2>🌐</h2>
      <h3>Web Development</h3>
      <p>HTML</p>
      <p>CSS</p>
      <p>React</p>
    </div>

    <div className="skill-card">
      <h2>🗄️</h2>
      <h3>Database</h3>
      <p>MySQL</p>
      <p>SQL</p>
    </div>

    <div className="skill-card">
      <h2>🛠️</h2>
      <h3>Tools</h3>
      <p>VS Code</p>
      <p>Git</p>
      <p>GitHub</p>
    </div>

  </div>

</section>{/* Projects Section */}

<section className="projects-section" id="projects">

  <div className="section-heading">
    <p>MY RECENT WORK</p>
    <h1>Featured <span>Projects</span></h1>
  </div>

  <div className="projects-container">

    {/* Project 1 */}

    <div className="project-card">

      <div className="project-number">01</div>

      <h2>PhishNet AI</h2>

      <p>
        An AI-powered phishing detection platform
        that analyzes URLs and identifies potentially
        malicious websites to help users stay safe online.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Flask</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>

      <div className="project-footer">
        <span>Web Application</span>
        <span>Completed ✓</span>
      </div>

    </div>

    {/* Project 2 */}

    <div className="project-card">

      <div className="project-number">02</div>

      <h2>FoodRescue</h2>

      <p>
        A smart food donation and redistribution
        platform that connects food donors with NGOs
        to reduce food waste and support people in need.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Flask</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>

      <div className="project-footer">
        <span>Web Application</span>
        <span>In Progress</span>
      </div>

    </div>

    {/* Project 3 */}

    <div className="project-card">

      <div className="project-number">03</div>

      <h2>Groundwater Intelligence</h2>

      <p>
        A groundwater intelligence system designed
        to monitor water quality, predict contamination
        risks and provide useful insights.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Machine Learning</span>
        <span>React</span>
        <span>FastAPI</span>
      </div>

      <div className="project-footer">
        <span>AI Web Application</span>
        <span>In Progress</span>
      </div>

    </div>

  </div>

</section><section className="certifications" id="certifications">
  <h2>My Certifications</h2>

  <div className="certification-container">
    <div className="certification-card">
      <h3>Oracle Cloud Infrastructure AI Foundations</h3>
      <p>Oracle – Coursera | May 2026</p>
    </div>

    <div className="certification-card">
      <h3>Object Oriented Programming in Java</h3>
      <p>IBM – Coursera | May 2026</p>
    </div>

    <div className="certification-card">
      <h3>Operating Systems</h3>
      <p>BITS Pilani – Coursera | May 2026</p>
    </div>

    <div className="certification-card">
      <h3>Software Engineer Intern Role Certification</h3>
      <p>HackerRank | June 2026</p>
    </div>
  </div>
</section>
<section className="internship" id="internship">
  <h2>Internship Experience</h2>

  <div className="internship-card">
    <h3>Data Analytics Intern</h3>
    <h4>InAmigos Foundation</h4>
    <p>July 15, 2026 – July 28, 2026</p>

    <p>
      Completed a Data Analytics internship with practical exposure
      to data cleaning, data analysis, and reporting workflows.
      Collaborated on analytics-related tasks to understand how
      raw data can be converted into useful insights.
    </p>
  </div>
</section>
<section className="contact" id="contact">
  <h2>Get In Touch</h2>
  <p>
    Have an opportunity or a project in mind?
    I'd love to hear from you!
  </p>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kanishkasasikumarsk@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-btn"
>
  Contact Me
</a>
</section>

    </div>
  );
}

export default App;