import "./_Pages.css";

function Projects(props) {
  /* let theme = props.theme; */
  return (
    <main className="Projects">
      <div className="row">
        <img
          className="icon"
          src={require("../images/projects/reddit.png")}
          alt="project 1"
        />
        <div>
          <h2>Project 1: Reddit App</h2>
          <p>
            Briefly introduce the project, explaining its purpose and your role.
            Highlight the technologies and tools you employed, showcasing how
            your contributions contributed to the project's success.
          </p>
        </div>
      </div>
      <div className="row">
        <img
          className="icon"
          src={require("../images/projects/scalc.png")}
          alt="project 2"
        />
        <div>
          <h2>Project 2: Savings Calculator</h2>
          <p>
            Present another project, demonstrating your versatility and
            creativity. Discuss the design considerations, responsive elements,
            and any unique features that set this project apart.
          </p>
        </div>
      </div>
      <div className="row">
        <img
          className="icon"
          src={require("../images/projects/TonnetzTorus.gif")}
          alt="project 3"
        />
        <div>
          <h2>Project 3: [Project Name]</h2>
          <p>
            Diversify your showcase with a third project, perhaps emphasizing
            interactivity, animations, or user engagement. Share your approach
            to problem-solving and how you tackled challenges along the way.
          </p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            Showcase your recent web development projects with brief
            descriptions for each.
          </li>
          <li>
            Include project screenshots, links to live demos, and GitHub
            repositories if applicable.
          </li>
          <li>
            Highlight projects that demonstrate your creativity, problem-solving
            skills, and knowledge of front-end technologies.
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Projects;
