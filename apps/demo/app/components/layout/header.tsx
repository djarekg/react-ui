import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs.js';
import SessionMenu from '@/components/session-menu/session-menu.js';
import { useSidenavContext } from '@/components/sidenav/sidenav-provider.js';
import MenuRounded from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import type { FC } from 'react';
import { NavLink } from 'react-router';
import './header.css';

type HeaderProps = {
  isAuthenticated: boolean;
};

const Header: FC<HeaderProps> = ({ isAuthenticated }) => {
  const { toggleOpen } = useSidenavContext();

  return (
    <header className="app-header">
      <nav>
        {isAuthenticated && (
          <IconButton
            size="large"
            onClick={toggleOpen}>
            <MenuRounded />
          </IconButton>
        )}
        <NavLink to={isAuthenticated ? '/' : '/signin'}>
          <img
            loading="lazy"
            src="/public/react-logo.svg"
            alt="React Logo"
            width="30"
            height="30"
          />
        </NavLink>
      </nav>

      {isAuthenticated && (
        <>
          <Breadcrumbs />
          <SessionMenu />
        </>
      )}
    </header>
  );
};

export default Header;
