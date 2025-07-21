import ProfileMenu from '@/components/profile-menu/profile-menu.js';
import { useSidenavContext } from '@/components/sidenav/sidenav-provider.js';
import { MenuRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router';
import './header.css';

type HeaderProps = {
  isAuthenticated: boolean;
};

export default function Header({ isAuthenticated }: HeaderProps) {
  const { toggleOpen } = useSidenavContext();

  return (
    <header className="app-header">
      <nav>
        {isAuthenticated && (
          <IconButton
            color="primary"
            size="large"
            onClick={toggleOpen}>
            <MenuRounded />
          </IconButton>
        )}
        <NavLink to={isAuthenticated ? '/' : '/signin'}>
          <img
            src="react-logo.svg"
            alt="React Logo"
            width="30"
            height="30"
          />
        </NavLink>
      </nav>

      {isAuthenticated && <ProfileMenu />}
    </header>
  );
}
