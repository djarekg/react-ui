import ProfileMenu from '@/components/profile-menu/profile-menu.js';
import { NavLink } from 'react-router';
import './header.css';

type HeaderProps = {
  isAuthenticated: boolean;
};

export default function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header className="app-header">
      <nav>
        <NavLink to={isAuthenticated ? '/' : '/signin'}>
          <img src="react-logo.svg" alt="React Logo" width="30" height="30" />
        </NavLink>
        {isAuthenticated && <NavLink to="/users">Users</NavLink>}
        {isAuthenticated && <NavLink to="/customers">Customers</NavLink>}
      </nav>

      {isAuthenticated && <ProfileMenu />}
    </header>
  );
}
