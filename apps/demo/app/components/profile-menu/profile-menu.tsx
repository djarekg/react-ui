import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import IconButton from '@mui/material/IconButton';
import { lazy, useCallback, useState, type MouseEvent } from 'react';

const ListItemIcon = lazy(() => import('@mui/material/ListItemIcon'));
const LogoutOutlined = lazy(() => import('@mui/icons-material/LogoutOutlined'));
const Menu = lazy(() => import('@mui/material/Menu'));
const MenuItem = lazy(() => import('@mui/material/MenuItem'));
const NavLink = lazy(() => import('react-router').then(({ NavLink }) => ({ default: NavLink })));
const PersonOutlineOutlined = lazy(() => import('@mui/icons-material/PersonOutlineOutlined'));

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) =>
    useCallback(() => setAnchorEl(e.currentTarget), []);
  const handleClose = () => useCallback(() => setAnchorEl(null), []);

  return (
    <>
      <IconButton onClick={handleClick}>
        <PersonOutlineRounded />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClose={handleClose}
        onClick={handleClose}>
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
}
