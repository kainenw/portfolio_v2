import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header"
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Projects from "../Pages/Projects";
import Resources from "../Pages/Resources";
import Contact from "../Pages/Contact";
import ThemeButton from "../ThemeButton/ThemeButton";

function App() {
  return (
    <div className="App">
      <ThemeButton />
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
