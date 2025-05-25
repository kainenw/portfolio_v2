import "./_Pages.css";

function Projects() {
  /* let theme = props.theme; */
  let handleClick = (e) => {
    let className = e.target.className;
    /* console.log(className); */
    console.log(e.target.src);
    let iframe = document.querySelector(`iframe.${className}`);
    if (iframe.classList.contains("active")) {
      iframe.classList.remove("active");
      e.target.src = require("../img/down.png");
    } else {
      iframe.classList.add("active");
      e.target.src = require("../img/up.png");
    }
  };

  return (
    <div className="Projects Page">
      <h1>Projects</h1>
      <div className="Design contrast-section">
        <h2>Design</h2>
        <p>
          I led these UX design efforts, conducting user research, generating
          user personas, journeys, etc., creating wireframes, mockups and
          prototypes in Figma.
        </p>
        <div className="info-group">
          <img
            className="icon"
            src={require("../img/projects/vote.png")}
            alt="project 1"
          />
          <div>
            <h3>Voting App:</h3>
            <p>
              Intuitive app to guide voters through the election process,
              promoting engagement.
            </p>
            <div className="icon toggle" onClick={handleClick}>
              <img
                className="voting"
                src={require("../img/down.png")}
                alt="voter prep project"
              />
            </div>
          </div>
          <iframe
            className="voting"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQuML0B_NIOFOHzWFC7PDCfCe-cVadFESsRBgGD1QGkSmDoSO_YdG6I40m__aZV42uH5bJPLwoymawz/embed?start=false&loop=false&delayms=3000"
            title="uxdproject3"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
        </div>
        <div className="info-group">
          <img
            className="icon"
            src={require("../img/projects/portfolio.png")}
            alt="portfolio redesign logo"
          />
          <div>
            <h3>Portfolio v2:</h3>
            <p>
              Redesign of my personal portfolio, showcasing my best work and
              demonstrating my evolving design skills.
            </p>
            <div className="icon toggle" onClick={handleClick}>
              <img
                className="portfolio"
                src={require("../img/down.png")}
                alt="voter prep project"
              />
            </div>
          </div>
          <iframe
            className="portfolio"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQgeh1fdcX2zunOIxK9VxjGgWX5kHayIw13Eo9_m0ptGNNgRgYTvJmsjl_ru0ZMavnQC7LzevOV29AZ/embed?start=false&loop=false&delayms=3000"
            title="uxdproject2"
            frameborder="0"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
        </div>
        <div className="info-group">
          <img src={require("../img/projects/sushi.png")} alt="project 3" />
          <div>
            <h3>Sushi App:</h3>
            <p>
              User-friendly interface designed to simplify the food ordering
              process for a local restaurant.
            </p>
            <div className="icon toggle" onClick={handleClick}>
              <img
                className="sushi"
                src={require("../img/down.png")}
                alt="voter prep project"
              />
            </div>
          </div>
          <iframe
            className="sushi"
            src="https://docs.google.com/presentation/d/e/2PACX-1vRcI5sv8eHU2oQbEUZTQFbUkB74zvDGRAK0zn850VpRaTmKhODP61ik8ePNw9PnqV1hRPQlLQpgHGyP/embed?start=false&loop=false&delayms=3000"
            title="uxdproject1"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
        </div>
      </div>
      <div className="Development">
        <h2>Development</h2>
        <div className="info-group">
          <img
            className="icon"
            src={require("../img/projects/portfolio.png")}
            alt="project 4"
          />
          <div>
            <h3>Portfolio v2:</h3>
            <p>
              Building the redesign for my portfolio page, including several
              portfolio projects.
            </p>
            <a href="https://github.com/kainenw/portfolio_v2">Github Repo</a>
          </div>
        </div>
        <div className="info-group">
          <img
            className="icon"
            src={require("../img/projects/reddit.png")}
            alt="project 5"
          />
          <div>
            <h3>Reddit App:</h3>
            <p>
              Streamlined Reddit browsing experience for improved efficiency and
              enjoyment, built with React and Redux.
            </p>
            <a href="https://github.com/kainenw/reddit">Github Repo</a>
          </div>
        </div>
        <div className="info-group">
          <img
            className="icon"
            src={require("../img/projects/TonnetzTorus.gif")}
            alt="project 6"
          />
          <div>
            <h3>Tonnetz Visualizer:</h3>
            <p>
              Interactive application that visualizes harmonic concepts for
              musicians, enhancing their understanding.
            </p>
            <a href="https://github.com/kainenw/tonnetz">Github Repo</a>
          </div>
        </div>
      </div>
      <div className="info-group">
        <img
          className="icon"
          src={require("../img/projects/scalc.png")}
          alt="project 7"
        />
        <div>
          <h3>Savings Calculator:</h3>
          <p>
            Financial planning tool empowering users to achieve their financial
            goals, built with javascript and jquery.
          </p>
          <a href="https://github.com/kainenw/scalc">Github Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
