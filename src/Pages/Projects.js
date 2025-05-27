import './_Pages.css'

function Projects() {
  /* let theme = props.theme; */
  let handleClick = (e) => {
    let className = e.target.className
    /* console.log(className); */
    console.log(e.target.src)
    let iframe = document.querySelector(`iframe.${className}`)
    if (iframe.classList.contains('active')) {
      iframe.classList.remove('active')
      e.target.src = require('../img/down.png')
    } else {
      iframe.classList.add('active')
      e.target.src = require('../img/up.png')
    }
  }

  return (
    <div className="Projects Page">
      <div className="non-contrast-section">
        <h1>Projects</h1>
      </div>
      <div className="Design contrast-section">
        <h2>Design</h2>
        {/* Voting App Case Study */}
        <div className="info-group">
          <img className="icon" src={require('../img/projects/vote.png')} alt="Voting App" />
          <div>
            <h3>Voting App</h3>
            <ul>
              <li><strong>Problem:</strong> Voters often find the election process confusing and disengaging, leading to low participation.</li>
              <li><strong>Process:</strong> Conducted user research, created personas, mapped user journeys, and designed wireframes and prototypes in Figma. Iterated based on feedback.</li>
              <li><strong>Solution:</strong> Developed an intuitive app that guides users through the voting process, increasing engagement and confidence.</li>
            </ul>
            <div className="icon toggle" onClick={handleClick} role="button" onKeyDown={handleClick} tabIndex="0">
              <img className="voting" src={require('../img/down.png')} alt="Show Voting App details" />
            </div>
          </div>
          <iframe
            className="voting"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQuML0B_NIOFOHzWFC7PDCfCe-cVadFESsRBgGD1QGkSmDoSO_YdG6I40m__aZV42uH5bJPLwoymawz/embed?start=false&loop=false&delayms=3000"
            title="Voting App Case Study"
            width="960"
            height="569"
            allowFullScreen
          />
        </div>
        {/* Portfolio v2 Case Study */}
        <div className="info-group">
          <img className="icon" src={require('../img/projects/portfolio.png')} alt="Portfolio v2" />
          <div>
            <h3>Portfolio v2</h3>
            <ul>
              <li><strong>Problem:</strong> My previous portfolio did not effectively showcase my growth or my best work as a designer and developer.</li>
              <li><strong>Process:</strong> Redesigned the site using Design Thinking, focusing on user experience, clean navigation, and responsive layouts. Created new mockups and iterated based on feedback.</li>
              <li><strong>Solution:</strong> A modern, responsive portfolio that highlights my skills and projects, improving engagement with potential clients and employers.</li>
            </ul>
            <div className="icon toggle" onClick={handleClick} role="button" onKeyDown={handleClick} tabIndex="0">
              <img className="portfolio" src={require('../img/down.png')} alt="Show Portfolio v2 details" />
            </div>
          </div>
          <iframe
            className="portfolio"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQgeh1fdcX2zunOIxK9VxjGgWX5kHayIw13Eo9_m0ptGNNgRgYTvJmsjl_ru0ZMavnQC7LzevOV29AZ/embed?start=false&loop=false&delayms=3000"
            title="Portfolio v2 Case Study"
            width="960"
            height="569"
            allowFullScreen
          />
        </div>
        {/* Sushi App Case Study */}
        <div className="info-group">
          <img src={require('../img/projects/sushi.png')} alt="Sushi App" />
          <div>
            <h3>Sushi App</h3>
            <ul>
              <li><strong>Problem:</strong> Ordering food online at a local restaurant was confusing and inefficient for users.</li>
              <li><strong>Process:</strong> Interviewed users, mapped pain points, and designed a streamlined interface in Figma. Prototyped and tested with real users.</li>
              <li><strong>Solution:</strong> Created a user-friendly app that simplifies the food ordering process, improving customer satisfaction and order accuracy.</li>
            </ul>
            <div className="icon toggle" onClick={handleClick} role="button" onKeyDown={handleClick} tabIndex="0">
              <img className="sushi" src={require('../img/down.png')} alt="Show Sushi App details" />
            </div>
          </div>
          <iframe
            className="sushi"
            src="https://docs.google.com/presentation/d/e/2PACX-1vRcI5sv8eHU2oQbEUZTQFbUkB74zvDGRAK0zn850VpRaTmKhODP61ik8ePNw9PnqV1hRPQlLQpgHGyP/embed?start=false&loop=false&delayms=3000"
            title="Sushi App Case Study"
            width="960"
            height="569"
            allowFullScreen
          />
        </div>
      </div>
      <div className="Development non-contrast-section">
        <h2>Development</h2>
        {/* Portfolio v2 (Development) Case Study */}
        <div className="info-group">
          <img className="icon" src={require('../img/projects/portfolio.png')} alt="Portfolio v2 Development" />
          <div>
            <h3>Portfolio v2 (Development)</h3>
            <ul>
              <li><strong>Problem:</strong> The previous portfolio site was not maintainable and lacked modern features.</li>
              <li><strong>Process:</strong> Rebuilt the site using React, modular components, and a theme system. Focused on code quality, accessibility, and performance.</li>
              <li><strong>Solution:</strong> A maintainable, scalable portfolio site with improved performance and developer experience.</li>
            </ul>
            <a href="https://github.com/kainenw/portfolio_v2">Github Repo</a>
          </div>
        </div>
        {/* Reddit App Case Study */}
        <div className="info-group">
          <img className="icon" src={require('../img/projects/reddit.png')} alt="Reddit App" />
          <div>
            <h3>Reddit App</h3>
            <ul>
              <li><strong>Problem:</strong> Browsing Reddit was cluttered and inefficient for power users.</li>
              <li><strong>Process:</strong> Designed and built a streamlined interface using React and Redux, focusing on usability and speed.</li>
              <li><strong>Solution:</strong> A custom Reddit client that improves browsing efficiency and user enjoyment.</li>
            </ul>
            <a href="https://github.com/kainenw/reddit">Github Repo</a>
          </div>
        </div>
        {/* Tonnetz Visualizer Case Study */}
        <div className="info-group">
          <img className="icon" src={require('../img/projects/TonnetzTorus.gif')} alt="Tonnetz Visualizer" />
          <div>
            <h3>Tonnetz Visualizer</h3>
            <ul>
              <li><strong>Problem:</strong> Musicians struggled to visualize and understand advanced harmonic concepts.</li>
              <li><strong>Process:</strong> Developed an interactive app to visualize harmonic relationships, using React and custom graphics.</li>
              <li><strong>Solution:</strong> An engaging tool that helps musicians explore and learn music theory visually.</li>
            </ul>
            <a href="https://github.com/kainenw/tonnetz">Github Repo</a>
          </div>
        </div>
        {/* Savings Calculator Case Study */}
        <div className="info-group">
          <img className="icon" src={require('../img/projects/scalc.png')} alt="Savings Calculator" />
          <div>
            <h3>Savings Calculator</h3>
            <ul>
              <li><strong>Problem:</strong> Users needed a simple way to plan and visualize their savings goals.</li>
              <li><strong>Process:</strong> Designed and built a calculator using JavaScript and jQuery, focusing on clarity and ease of use.</li>
              <li><strong>Solution:</strong> A financial tool that empowers users to set and achieve their savings targets.</li>
            </ul>
            <a href="https://github.com/kainenw/scalc">Github Repo</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
