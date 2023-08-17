import "./Pages.css";

function Projects() {
  return (
    <main className="Projects">
      <div className="row">
        <img src="../sam" alt="project 1" />
        <div>
          <h2>Project 1</h2>
          <p>description of project 1</p>
        </div>
      </div>
      <div className="row">
        <img src="../sam" alt="project 2" />
        <div>
          <h2>Project 2</h2>
          <p>description of project 2</p>
        </div>
      </div>
      <div className="row">
        <img src="../sam" alt="project 3" />
        <div>
          <h2>Project 3</h2>
          <p>description of project 3</p>
        </div>
      </div>
    </main>
  );
}

export default Projects;
