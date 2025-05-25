import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  ${() => `
    &.App-header {
      background-color: rgba(255, 255, 255, 0.5);
    }

    color: inherit;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    max-width: 60%;
    min-width: 60%;
    border: 1px solid var(--gray);
    border-radius: 20px;
    box-shadow: 10px 10px 60px black;
    padding: 0.5rem;
    font-size: calc(10px + 2vmin);
    z-index: 50;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 20;

    a {
      color: inherit;
      padding: 0.25em 0.5em;
      cursor: pointer;
      text-decoration: none;
      background-color: inherit; /* Inherit background from header */
    }

    a.active {
      border: 1px solid var(--gray);
      border-radius: 12.5px;
      box-shadow: inset 1.5px 1.5px 3px black;
    }
  `}

  ${(props) =>
    props.theme === 'dark' &&
    `
      &.App-header {
        background-color: var(--off-black);
      }
    `}

  ${(props) =>
    props.theme === 'light' &&
    `
       &.App-header {
        background-color: var(--light-gray);
      }
    `}
`

function Header() {
  const [page, setPage] = useState(null)

  const handleClick = (e) => {
    page && page.classList.remove('active')
    setPage(e.target)
    e.target.classList.add('active')
  }

  return (
    <StyledHeader className="App-header">
      <NavLink to="/" onClick={handleClick}>
        about
      </NavLink>
      {/*<nav onClick={handleClick}>blog</nav>*/}
      <NavLink to="/projects" onClick={handleClick}>
        projects
      </NavLink>
      <NavLink to="/resources" onClick={handleClick}>
        resources
      </NavLink>
      <NavLink to="/contact" onClick={handleClick}>
        contact
      </NavLink>
    </StyledHeader>
  )
}

export default Header
