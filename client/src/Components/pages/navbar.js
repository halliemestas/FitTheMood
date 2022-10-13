import { NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
    <h1>Fit The Mood</h1>
      <ul>
        <li>
          <NavLink exact to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink  to="/workout">Workouts</NavLink>
        </li>
        <li>
          <NavLink to="/mood">Mood</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
      </ul>
    </nav>
  );
}