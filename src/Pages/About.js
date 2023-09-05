import "./_Pages.css";

function About() {
  return (
    <main className="About">
      <div className="row">
        <img src={require("../images/headshot.png")} alt="Kainen's headshot" />
        <div>
          <h1>Welcome to my web development portfolio!</h1>
          <h2>**Introduction:**</h2>
          <ul>
            <li>
              A brief welcome message with your name (Kainen) and role as an
              aspiring front-end web developer.
            </li>
            <li>
              A concise description of your passion for web development and your
              goal of starting a career in the field.
            </li>
            <li>Highlight your location in Nashville, TN.</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div>
          <h2>**About Me:**</h2>
          <ul>
            <li>
              Provide a short biography, mentioning your background, interests,
              and aspirations.
            </li>
            <li>
              Explain your journey into web development and what drives your
              enthusiasm.
            </li>
            <li>
              Share your love for music theory and queer theology and how these
              aspects influence your work.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div>
          <h2>**Skills:**</h2>
          <ul>
            <li>
              List your technical skills, such as HTML, CSS, JavaScript,
              responsive design, and any relevant frameworks or libraries.
            </li>
            <li>
              Mention your proficiency in utilizing design tools like Adobe XD
              or Figma for creating mockups.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
export default About;
