import "./Pages.css";

function About() {
  return (
    <main className="About">
      <div className="row">
        <img src={require("../img/headshot.png")} alt="Kainen's headshot" />
        <div>
          <h1>Welcome to my web development portfolio!</h1>
          <p>Brief Intro...</p>
        </div>
      </div>
      <div className="row">
        <div>
          <h2>About me</h2>
          <p>about me</p>
        </div>
      </div>
    </main>
  );
}
export default About;
