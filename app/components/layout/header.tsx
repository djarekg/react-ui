import { useAuthContext } from '@/auth/auth.js';
import { LogoutOutlined } from '@mui/icons-material';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import { Avatar, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { useState, type MouseEvent } from 'react';
import { NavLink, useLoaderData, type LoaderFunctionArgs } from 'react-router';
import './header.css';

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Avatar sx={{ width: 32, height: 32 }} onClick={handleClick}>
        <PersonOutlineOutlined />
      </Avatar>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <PersonOutlineOutlined />
          </ListItemIcon>
          <NavLink to="/profile">Profile</NavLink>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
          <NavLink to="/signout">Signout</NavLink>
        </MenuItem>
      </Menu>
    </>
  );
};

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
