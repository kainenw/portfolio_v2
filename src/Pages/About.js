import "./_Pages.css";

function About() {
  return (
    <div className="About Page">
      <div>
        <h1>
          Welcome <span> to my web development portfolio!</span>
        </h1>
      </div>
      <div className="row">
        <img src={require("../img/headshot.png")} alt="Kainen's headshot" />
        <div>
          <h2>**Introduction:**</h2>
          <p>
            Hi, I'm Kainen, a passionate web developer and aspiring UX designer
            based in Nashville, TN. I'm excited to share my journey and projects
            with you!
          </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>**Objective:**</h2>
            <p>
              I'm eager to contribute to the web development community and
              create accessible, user-friendly websites. My objective is to
              secure a role that allows me to apply my skills and continue
              growing in the industry.
            </p>
          </div>
          <div>
            <h2>**About Me:**</h2>
            <p>
              I'm a musician with a background in music theory and philosophy.
              I'm passionate about creating inclusive, accessible websites that
              reflect my love for design and user experience.
            </p>
          </div>
          <div>
            <h2>**Skills:**</h2>
            <p>
              I'm proficient in HTML, CSS, JavaScript, responsive design, and
              accessible design.
            </p>
            <p>
              I'm also familiar with web hosting, version control, web
              standards, web technologies, web trends, web communities, web
              ethics, web culture, web history, web philosophy, web psychology,
              and web sociology.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>**Education:**</h2>
          <p>
            I'm a self-taught developer who has completed various online courses
            and tutorials. I'm also pursuing a degree in computer science to
            deepen my understanding of programming and software development.
          </p>
        </div>
        <div>
          <h2>**Experience:**</h2>
          <p>
            I've worked on several freelance projects and collaborated with
            local businesses to enhance their online presence. I'm eager to
            expand my portfolio and contribute to innovative projects.
          </p>
        </div>
        <div>
          <h2>**Projects:**</h2>
          <p>
            I've developed a Reddit app, a savings calculator, and a music
            theory tool. I'm currently working on a personal blog and a
            portfolio website to showcase my work.
          </p>
          <p>
            I'm also working on a web application that helps musicians learn
            music theory through interactive exercises and quizzes.
          </p>
        </div>
        <div>
          <h2>**Contact:**</h2>
          <p>
            I'm open to new opportunities and collaborations. Feel free to
            connect with me on LinkedIn, GitHub, and Twitter. You can also reach
            out via email at <a href="mailto:kainen.white@gmail.com" />
          </p>
        </div>
      </div>
      <div>
        <h2>**Conclusion:**</h2>
        <p>
          Thank you for visiting my portfolio! I'm excited to continue learning
          and growing in the web development field. Let's connect and create
          something amazing together!
        </p>
      </div>
    </div>
  );
}
export default About;
