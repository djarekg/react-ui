import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useCallback, useState, type MouseEvent } from 'react';
import { NavLink } from 'react-router';

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
