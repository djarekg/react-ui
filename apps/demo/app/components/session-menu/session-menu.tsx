import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import IconButton from '@mui/material/IconButton';
import { lazy, useCallback, useState, type MouseEvent } from 'react';

const Menu = lazy(() => import('./menu.js'));

const SessionMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = useCallback((e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget), []);
  const handleClose = useCallback(() => setAnchorEl(null), []);

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
};

export default SessionMenu;
