import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {

  useEffect(() => {
    const scriptURL = "https://script.google.com/macros/s/AKfycbzYczLJ5s-8-2q4hN9uVd2yUK7hF3p5nQ-ZAm0iVbtKApDiCnxsAm6MpDELIRBCi0iX-A/exec";
    const form = document.forms['submit-to-google-sheet'];
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
          if (response.ok) {
            form.reset();
            alert('Form submitted successfully!');
          } else {
            alert('An error occurred. Form was not submitted.');
          }
        })
        .catch(error => {
          alert('An error occurred. Form was not submitted.');
        });
    };
  
    form.addEventListener('submit', handleSubmit);
    // This is to ensure the form only submits once per submission because it kept sending multiple submissions under 1 submit.
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []); 

  return (
    <Layout>
      <Head>
        <title>Tu Tran - Portfolio</title>
        <meta name="description" content="Your portfolio description" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/fcc233862c.js" crossOrigin="anonymous"></script>
      </Head>

      <main>
        <div className="hero-section" id ="hero">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Tu. <i class="fa-brands fa-waze"></i></h1>
            <p className="hero-description">I'm a Full Stack Developer and a huge fan of One Piece. Here, you'll find a showcase of my projects and a glimpse into my journey as a developer. </p>
          </div>
        </div>
        <div className="icon-container">
          <i className="fa-solid fa-arrow-down fa-beat fa-lg"></i>
        </div>
        
        <div className="project-section" id ="projects">
          <h1 className="header">My Projects</h1>
          <div className="work-list">
            <div className="work">
              <img src=""/>
            </div>
            <div className="work">
              <img src=""/>
            </div>
            <div className="work">
              <img src=""/>
            </div>
          </div>
        </div>

        <div className="about-section" id="about">
          <h1 className="header">About Me <i class="fa-regular fa-address-card"></i></h1>
          <p className="about-description">I am driven by a deep passion for technology. What sets me apart is my relentless determination and unwavering commitment to excellence. My academic achievements and self-directed projects showcase my ability to adapt, innovate, and deliver results. I embrace challenges as opportunities for growth, leveraging my analytical mindset and strong problem-solving skills to overcome obstacles and create impactful solutions.</p>
          <h2 className="about-subsection-title">0. Saint Louis University</h2>
          <p className="about-subheading">Student</p>
          <p className="about-subheading-date">May 2024</p>
          <p className="about-subsection-description">My academic background, coupled with personal projects and collaborations, has provided me with a solid foundation in various programming languages and frameworks. I am finishing up with a major in Computer Science and a minor in Mathematics.</p>
          <h2 className="about-subsection-title">1. Auto Spa Etc. Express</h2>
          <p className="about-subheading">Wash Attendant</p>
          <p className="about-subheading-date">August 2019-May 2023</p>
          <p className="about-subsection-description">Throughout my college years, I worked as a wash attendant while pursuing my degree. I worked full-time during the summer and during my last few months as a Junior in College. This posistion required everyone of the crew to take on many roles and adapt quickly, which broaden my problem solving skills and my ability to communicate with others.</p>
          <h2 className="about-subsection-title">2. Saint Louis University</h2>
          <p className="about-subheading">Student Worker</p>
          <p className="about-subheading-date">May 2023-July 2023</p>
          <p className="about-subsection-description">Summer of 2023, I worked in the “Gallery of Glosses” project at SLU. I worked full time during the summer. This position required...</p>
        </div>
        <div className="skills-section" id="skills">
          <h1 className="header">Skills <i class="fa-solid fa-hammer"></i></h1>
          <p className="skills-description">Here are some of the most recent tools and technologies that I have used.</p>
          <div className="skills-container">
            <div className = "skills-column">
            <h3>Front-End Technology</h3>
              <ul>
                <li><i className="fa-brands fa-react"></i> React JS</li>
                <li><i className="fa-brands fa-bootstrap"></i> Bootstrap</li>
                <li><i className="fa-brands fa-html5"></i> HTML</li>
                <li><i className="fa-brands fa-css3-alt"></i> CSS</li>
                <li><i className="fa-brands fa-js"></i> JavaScript</li>
                <li><i className="fa-brands fa-vuejs"></i> Vue JS</li>
              </ul>
            </div>
            <div className = "skills-column">
            <h3>Back-End Technology</h3>
              <ul>
                <li><i className="fa-brands fa-node-js"></i> Node JS</li>
                <li><i className="fa-brands fa-python"></i> Python</li>
                <li><i className="fa-brands fa-java"></i> Java</li>
                <li><img src="https://support.dbconvert.com/hc/article_attachments/360015342380/MySQLWorkbench.png" alt="sql-icon"/> SQL</li>
                <li><img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="c-icon"/> C++</li>
                <li><img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="firebase-icon"/> FireBase</li>
                <li><i className="fa-brands fa-aws"></i> Amazon AWS</li>
                <li><img src="https://res.cloudinary.com/apideck/image/upload/v1667963576/marketplaces/ckp6oizgbgvm00a49vicntn6d/listings/snowflake_icon_ptf9oz.png" alt="snowflake-icon"/> Snowflake</li>
              </ul>
            </div>
            <div className = "skills-column">
              <h3>Other</h3>
              <ul>
                <li><i className="fa-brands fa-gitlab"></i> GitLab</li>
                <li><i className="fa-brands fa-github"></i> GitHub</li>
                <li><i className="fa-brands fa-npm"></i> npm</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-section" id="contact">
          <div className="contact-left">
            <h1 className="header">Say Hello <i class="fa-regular fa-paper-plane"></i></h1>
            <p>Shoot me an message at tutran.stl@gmail.com or through my contact form. Some of my socials: </p>
            <div className="contact-socials">
              <a href = "https://www.linkedin.com/in/tutrancsci/" target="_blank"> 
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href = "https://github.com/TheTuTran" target="_blank"> 
                <i className="fa-brands fa-github"></i>
              </a>
              </div>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet">
              <h1>Contact Me <i class="fa-regular fa-hand-point-down"></i></h1>
              <br></br>
              <input type="text" name="Name" placeholder="Your Name" required/>
              <input type="email" name="Email" placeholder="Your Email" required/>
              <textarea name="Message"  rows="6" placeholder="Message" required/>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
