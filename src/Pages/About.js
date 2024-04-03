import "./_Pages.css";

function About() {
  return (
    <div className="About Page">
      <h1>Kainen White</h1>
      <h2>UX Designer</h2>
      <div className="info-group">
        <img src={require("../img/headshot.png")} alt="Kainen's headshot" />
        <div>
          <h3>About Me</h3>
          <p>
            I'm a UX/UI designer based in Nashville who bridges the gap between
            design and development. With my understanding of coding principles,
            I create designs that are both beautiful and technically feasible.
            Let's collaborate to build user-focused experiences that seamlessly
            transition from concept to reality.
          </p>
        </div>
      </div>
      <div className="contrast-section">
        <h2>My Work</h2>
        <div className="info-group">
          <img
            className="icon"
            src={require("../img/design.png")}
            alt="project 2"
          />
          <div>
            <ul>
              <h3>Design</h3>
              <li>
                Voting Preparation Service: Intuitive app to guide voters
                through the election process, promoting engagement.
              </li>
              <li>
                Portfolio v2: Redesign of my personal portfolio, showcasing my
                best work and demonstrating my evolving design skills.
              </li>
              <li>
                Sushi App: User-friendly interface designed to simplify the food
                ordering process for a local restaurant.
              </li>
            </ul>
          </div>
        </div>
        <div className="info-group">
          <img
            className="icon"
            src={require("../img/dev.png")}
            alt="programming icon"
          />
          <div>
            <ul>
              <h3>Development</h3>
              <li>
                Portfolio v2: Building the redesign for my portfolio page,
                including several portfolio projects.
              </li>
              <li>
                Reddit App: Streamlined Reddit browsing experience for improved
                efficiency and enjoyment, built with React and Redux.
              </li>
              <li>
                Tonnetz Visualizer: Interactive application that visualizes
                harmonic concepts for musicians, enhancing their understanding.
              </li>
              <li>
                Savings Calculator: Financial planning tool empowering users to
                achieve their financial goals, built with javascript and jquery.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Skills:</h2>
          <div className="info-group">
            <img
              className="icon"
              src={require("../img/designthinking.png")}
              alt="design icon"
            />
            <div>
              <h3>Design Thinking Process</h3>
              <ul>
                <li>
                  Empathizing with users by creating empathy maps, personas,
                  user stories, and user journey maps
                </li>
                <li>Defining user pain points</li>
                <li>
                  Ideating design solutions using Crazy Eights, How Might We,
                  and competitive audits
                </li>
                <li>
                  Creating wireframes and prototypes on paper and digitally
                </li>
                <li>
                  Developing mockups using visual design elements and principles
                </li>
                <li>Designing in Figma and Adobe XD</li>
                <li>Conducting interviews and usability studies</li>
                <li>
                  Considering accessibility at every point in the design process
                </li>
              </ul>
            </div>
          </div>
          <div className="info-group">
            <img
              className="icon"
              src={require("../img/dev.png")}
              alt="programming icon"
            />
            <div>
              <h3>Front-End</h3>
              <ul>
                <li>
                  HTML, CSS, JavaScript, Responsive Design, Accessibility
                  Standards
                </li>
                <li>
                  Version Control, Web Hosting, Familiarity with broader design
                  and development concepts
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contrast-section">
          <h2>Experience:</h2>
          <div className="info-group">
            <img
              className="icon"
              src={require("../img/projects/portfolio.png")}
              alt="portfolio icon"
            />
            <div>
              <ul>
                <li>
                  Freelance Work: Collaborated with local businesses to improve
                  their websites through both design and development.
                </li>
                <li>
                  Self-Directed Learning: Completed online courses and actively
                  pursuing a deeper understanding of UX design and web
                  development.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="info-group">
        <img
          src={require("../img/headshot.png")}
          alt="Headshot of Kainen White"
        />
        <div>
          <h3>Let's Build Something Amazing Together!</h3>
          <p>
            Interested in collaborating on design-focused projects? Let's
            connect! Reach me on LinkedIn, GitHub, and Twitter. You can also
            reach out via email at{" "}
            <a href="mailto:kainen.white@gmail.com">kainen.white@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
