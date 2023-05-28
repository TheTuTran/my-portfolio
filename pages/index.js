import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tu Tran - Portfolio</title>
        <meta name="description" content="Your portfolio description" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/fcc233862c.js" crossorigin="anonymous"></script>
      </Head>

      <main>
        <div className="hero-section" id ="hero">
          <div className="hero-content">
            <h1 class="hero-title">Hi, I'm Tu.</h1>
            <p class="hero-description">I'm a Full Stack Developer and a huge fan of One Piece. Here, you'll find a showcase of my projects and a glimpse into my journey as a developer. </p>
          </div>
        </div>
        <div className="about-section" id="about">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">I am driven by a deep passion for technology. What sets me apart is my relentless determination and unwavering commitment to excellence. My academic achievements and self-directed projects showcase my ability to adapt, innovate, and deliver results. I embrace challenges as opportunities for growth, leveraging my analytical mindset and strong problem-solving skills to overcome obstacles and create impactful solutions.</p>
          <h2 className="about-subsection-title">Saint Louis University</h2>
          <p className="about-subheading">Student</p>
          <p className="about-subheading-date">May 2024</p>
          <p className="about-subsection-description">My academic background, coupled with personal projects and collaborations, has provided me with a solid foundation in various programming languages and frameworks. I am finishing up with a major in Computer Science and a minor in Mathematics.</p>
          <h2 className="about-subsection-title">Auto Spa Etc. Express</h2>
          <p className="about-subheading">Wash Attendant</p>
          <p className="about-subheading-date">August 2019-May 2023</p>
          <p className="about-subsection-description">Throughout my college years, I worked as a wash attendant while pursuing my degree. I worked full-time during the summer and during my last few months as a Junior in College. This posistion required everyone of the crew to take on many roles and adapt quickly, which broaden my problem solving skills and my ability to communicate with others.</p>
          <h2 className="about-subsection-title">Saint Louis University</h2>
          <p className="about-subheading">Student Worker</p>
          <p className="about-subheading-date">May 2023-July 2023</p>
          <p className="about-subsection-description">Summer of 2023, I worked in the “Gallery of Glosses” project at SLU. I worked full time during the summer. This position required...</p>
        </div>
        <div className="skills-section">
          <p></p>
          <div class="skills-content">
            <div class = "skill-col-1"></div>
            <div class = "skill-col-2"></div>
            <div class = "skill-col-2"></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
