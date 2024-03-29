import "./_Pages.css";

function Projects(props) {
  /* let theme = props.theme; */
  return (
    <div className="Projects Page">
      <h1>Projects</h1>
      <div className="Design">
        <h2>Design</h2>
        <p>
          I led these UX design efforts, conducting user research, generating
          user personas, journeys, etc., creating wireframes, mockups and
          prototypes in Figma.
        </p>
        <div className="row">
          <img
            className="icon"
            src={require("../img/projects/vote.png")}
            alt="project 1"
          />
          <div>
            <h2>Voting App:</h2>
            <p>
              Intuitive app to guide voters through the election process,
              promoting engagement.
            </p>
          </div>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQuML0B_NIOFOHzWFC7PDCfCe-cVadFESsRBgGD1QGkSmDoSO_YdG6I40m__aZV42uH5bJPLwoymawz/embed?start=false&loop=false&delayms=3000"
            title="uxdproject3"
            frameborder="0"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
        <div className="row">
          <img
            className="icon"
            src={require("../img/projects/portfolio.png")}
            alt="project 2"
          />
          <div>
            <h2>Portfolio v2:</h2>
            <p>
              Redesign of my personal portfolio, showcasing my best work and
              demonstrating my evolving design skills.
            </p>
          </div>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQgeh1fdcX2zunOIxK9VxjGgWX5kHayIw13Eo9_m0ptGNNgRgYTvJmsjl_ru0ZMavnQC7LzevOV29AZ/embed?start=false&loop=false&delayms=3000"
            title="uxdproject2"
            frameborder="0"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
        <div className="presentation">
          <img
            className="icon"
            src={require("../img/projects/sushi.png")}
            alt="project 3"
          />
          <div>
            <h2>Sushi App:</h2>
            <p>
              User-friendly interface designed to simplify the food ordering
              process for a local restaurant.
            </p>
          </div>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vRcI5sv8eHU2oQbEUZTQFbUkB74zvDGRAK0zn850VpRaTmKhODP61ik8ePNw9PnqV1hRPQlLQpgHGyP/embed?start=false&loop=false&delayms=3000"
            title="uxdproject1"
            frameborder="0"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
      <div className="Development">
        <h2>Development</h2>
        <div className="row">
          <img
            className="icon"
            src={require("../img/projects/portfolio.png")}
            alt="project 4"
          />
          <div>
            <h2>Portfolio v2:</h2>
            <p>
              Building the redesign for my portfolio page, including several
              portfolio projects.
            </p>
            <a href="https://github.com/kainenw/portfolio_v2">Github Repo</a>
          </div>
        </div>
        <div className="row">
          <img
            className="icon"
            src={require("../img/projects/reddit.png")}
            alt="project 5"
          />
          <div>
            <h2>Reddit App:</h2>
            <p>
              Streamlined Reddit browsing experience for improved efficiency and
              enjoyment, built with React and Redux.
            </p>
            <a href="https://github.com/kainenw/reddit">Github Repo</a>
          </div>
        </div>
        <div className="row">
          <img
            className="icon"
            src={require("../img/projects/TonnetzTorus.gif")}
            alt="project 6"
          />
          <div>
            <h2>Tonnetz Visualizer:</h2>
            <p>
              Interactive application that visualizes harmonic concepts for
              musicians, enhancing their understanding.
            </p>
            <a href="https://github.com/kainenw/tonnetz">Github Repo</a>
          </div>
        </div>
        <div className="row">
          <img
            className="icon"
            src={require("../img/projects/scalc.png")}
            alt="project 7"
          />
          <div>
            <h2>Savings Calculator:</h2>
            <p>
              Financial planning tool empowering users to achieve their
              financial goals, built with javascript and jquery.
            </p>
            <a href="https://github.com/kainenw/scalc">Github Repo</a>
          </div>
        </div>
        <div>
          <ul>
            <li>
              Include project screenshots, links to live demos, and GitHub
              repositories if applicable.
            </li>
            <li>
              Highlight projects that demonstrate your creativity,
              problem-solving skills, and knowledge of front-end technologies.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
