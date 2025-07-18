import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import { NavLink } from 'react-router';
import './header.css';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useState, type MouseEvent } from 'react';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <header className="app-header">
      <nav>
        <NavLink to="/">
          <img src="react-logo.svg" alt="React Logo" width="30" height="30" />
        </NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/customers">Customers</NavLink>
      </nav>

      <div>
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
            <Avatar sx={{ width: 24, height: 24 }}>
              <PersonOutlineOutlined />
            </Avatar>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}
