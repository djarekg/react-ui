import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import IconButton from '@mui/material/IconButton';
import { lazy, useState, type MouseEvent } from 'react';

const Menu = lazy(() => import('./menu.js'));

export default function SessionMenu() {
  'use memo';

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleClick}>
        <PersonOutlineRounded />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}
