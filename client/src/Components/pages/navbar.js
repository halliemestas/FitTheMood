import { NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
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
      </ul>
    </nav>
  );
}