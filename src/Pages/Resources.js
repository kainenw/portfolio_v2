import "./_Pages.css";

function Resources() {
  return (
<<<<<<< HEAD
    <div className="Resources Page">
      <h1>Resources</h1>
      <p>
        Elevate Your UX Design & Web Development Skills. Discover a curated
        selection of top resources to accelerate your learning.
      </p>

      <div className="info-group contrast-section">
        <img className="icon" src={require("../img/mdn.png")} alt="mdn logo" />
        <div>
          <h3>Master the Fundamentals:</h3>
          <p>Bookmark the best documentation for:</p>
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                HTML (MDN)
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                CSS (MDN)
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                JavaScript (MDN)
              </a>
            </li>
            <li>
              <a href="https://www.php.net/manual/en/">PHP (PHP Manual)</a>
            </li>
            <li>
              <a href="https://devdocs.io/">DevDocs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group">
        <img
          className="icon"
          src={require("../img/nodejs.png")}
          alt="nodejs logo"
        />
        <div>
          <h3>Popular Frameworks & Libraries:</h3>
          <ul>
            <li>
              <a href="https://reactjs.org/">React</a>
            </li>
            <li>
              <a href="https://vuejs.org/">Vue</a>
            </li>
            <li>
              <a href="https://angular.io/">Angular</a>
            </li>
            <li>
              <a href="https://jquery.com/">jQuery</a>
            </li>
            <li>
              <a href="https://getbootstrap.com/">Bootstrap</a>
            </li>
            <li>
              <a href="https://www.expressjs.com/">Express</a>
            </li>
            <li>
              <a href="https://nodejs.org/">Node</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group contrast-section">
        <img src={require("../img/figma.png")} alt="figma logo" />
        <div>
          <h3>Design Powerhouses:</h3>
          <ul>
            <li>
              <a href="https://www.figma.com/">Figma</a>
            </li>
            <li>
              <a href="https://www.sketch.com/">Sketch</a>
            </li>
            <li>
              <a href="https://www.adobe.com/products/xd.html">Adobe XD</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group">
        <img className="icon" src={require("../img/git.png")} alt="Git logo" />
        <div>
          <h3>Collaboration and Version Control</h3>
          <ul>
            <li>
              <a href="https://github.com/">Github</a>
            </li>
            <li>
              <a href="https://git-scm.com/">Git</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group contrast-section">
        <img className="icon" src={require("../img/mdn.png")} alt="MDN logo" />
        <div>
          <h3>Free Learning Paths</h3>
          <p>
            Articles, videos, courses, workshops, and projects to boost your
            expertise.
          </p>
          <ul>
            <li>
              <a href="https://www.w3schools.com/">W3Schools</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/Guide">
                MDN Web Development Guides
              </a>
            </li>
            <li>
              <a href="https://www.codecademy.com/">
                Codecademy (Free Courses)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group">
        <img
          className="icon"
          src={require("../img/dev.png")}
          alt="Lorem Ipsum or whatever"
        />
        <div>
          <h3>Common Web Development Challenges (and How to Overcome Them)</h3>
          <ul>
            <li>
              Browser Compatibility:
              <a href="https://www.browserstack.com/">Test with BrowserStack</a>
            </li>
            <li>
              Performance Optimization:
              <a href="https://developers.google.com/web/tools/lighthouse">
                Analyze with Lighthouse
              </a>
            </li>
            <li>
              Progressive Enhancement: Build experiences that work for everyone.
            </li>
            <li>
              Accessibility Checks:{" "}
              <a href="https://wave.webaim.org/">Use WAVE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
=======
    <main className="Resources">
      <h1>The web’s best resources for web development</h1>
      <h2>Learning Journey</h2>
      <p>
        Highlight your commitment to growth and improvement by sharing insights
        from online courses, workshops, or personal projects that have
        contributed to your skill set.
      </p>
      <h2>Blog & Resources</h2>
      <p>
        Engage with visitors by sharing your thoughts, tutorials, and helpful
        resources related to front-end development. This section showcases your
        willingness to contribute to the community's knowledge pool.
      </p>
      <p>Most of the content of this site is elaborated in my blog</p>
      <h2>Documentation</h2>
      <p>
        Since web development is a collaborative field, our work is extensively
        shaped by others. Any problem you might run into has probably already
        been solved many different ways. Frameworks and libraries provide a set
        of solutions for others to access. This leads us to rely heavily on
        documentation. Any framework or library worth using has documentation
        worth reading. <br />
        <br />
        The following list contains resources for understanding and making use
        of a wide variety of web technologies. If these aren’t already in your
        bookmarks, they need to be.
      </p>
      <ul>
        <li>
          <h2>HTML, CSS, Javascript, PHP</h2>
        </li>
        <li>
          <h2>MDN</h2>
          <p>
            The Mozilla developers network is your one-stop shop for
            documentation on essential web technologies. Anything you want to
            know about ecmascript, css, html,php and more are there.
          </p>
        </li>
        <li>
          <h1>Documentation</h1>
          <h2>Official Publications</h2>w3c, ecma international, whatwg
          <p>
            HTML, CSS and Javascript are developed and specified by these
            organizations. They provide authoratative information on web
            technologies, but are too broad for quick-reference. If you have a
            more narrow concern (like how to center a fixed element), you will
            likely need help from the resources on the next list instead.
          </p>
          <h2>Educational Material</h2>
        </li>
        <li>
          Ongoing Education: w3schools codecademy MDN's guide to learning web
          development
        </li>
        <li>
          Forums: Stack Overflow Search Engines when all else fails.. or you
          have a specific error code
        </li>
      </ul>
    </main>
>>>>>>> implement_css-in-js
  );
}

export default Resources;
