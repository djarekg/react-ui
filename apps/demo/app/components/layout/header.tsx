import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs.js';
import Search from '@/components/search/search.js';
import SessionMenu from '@/components/session-menu/session-menu.js';
import { useSidenavContext } from '@/components/sidenav/sidenav-provider.js';
import MenuRounded from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router';
import './header.css';

type HeaderProps = {
  isAuthenticated: boolean;
};

export default function Header({ isAuthenticated }: HeaderProps) {
  'use memo';

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
          <div className="app-header-right-side">
            <Search />
            <SessionMenu />
          </div>
        </>
      )}
    </header>
  );
}
