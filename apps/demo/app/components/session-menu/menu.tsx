import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router';

type MenuProps = {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
};

export default function Menu({ anchorEl, open, handleClose }: MenuProps) {
  'use memo';

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
}
