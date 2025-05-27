import { NavLink } from 'react-router-dom'
import './Header.css'

function Header(props) {
  const { theme } = props
  // NavLink handles active class automatically
  return (
    <header className="App-header" data-theme={theme}>
      <NavLink to="/" end>
        about
      </NavLink>
      {/*<nav>blog</nav>*/}
      <NavLink to="/projects">
        projects
      </NavLink>
      <NavLink to="/resources">
        resources
      </NavLink>
      <NavLink to="/contact">
        contact
      </NavLink>
    </header>
  )
}

export default Header