import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import type { FC } from 'react';
import { NavLink } from 'react-router';

type MenuProps = {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
};

const Menu: FC<MenuProps> = ({ anchorEl, open, handleClose }) => {
  return (
    <MuiMenu
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
    </MuiMenu>
  );
};

export default Menu;
