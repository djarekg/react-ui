import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import { NavLink } from 'react-router';
import './header.css';

export default function Header() {
  return (
    <header className="app-header">
      <nav>
        <NavLink to="/">
          <img src="react-logo.svg" alt="React Logo" width="30" height="30" />
        </NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/customers">Customers</NavLink>
      </nav>
    </header>
  );
}
