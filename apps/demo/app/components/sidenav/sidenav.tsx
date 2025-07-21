import NavListItem from '@/components/nav-list-item/nav-list-item.js';
import { useSidenavContext } from '@/components/sidenav/sidenav-provider.js';
import { HomeOutlined, PeopleOutlineRounded, SettingsOutlined } from '@mui/icons-material';
import { Drawer, List, type SxProps } from '@mui/material';
import styles from './sidenav.module.css';

const DRAWER_WIDTH = 240;

/**
 * Styles for the sidenav drawer.
 * Adjusts the width and ensures the drawer paper is styled correctly.
 */
const DRAWER_SX = {
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
  },
} satisfies SxProps;

export default function Sidenav() {
  const { open, setOpenFalse } = useSidenavContext();

  return (
    <Drawer
      open={open}
      onClose={setOpenFalse}
      variant="temporary"
      sx={DRAWER_SX}
      className={styles.appSidenav}>
      <header>
        <h1 className={styles.appSidenavTitle}>React UI</h1>
      </header>
      <List
        component="nav"
        className={styles.appSidenavList}>
        <NavListItem
          to="/"
          icon={<HomeOutlined />}
          label="Home"
        />
        {/* <Divider /> */}
        <NavListItem
          to="/users"
          icon={<PeopleOutlineRounded />}
          label="Users"
        />
        {/* <Divider /> */}
        <NavListItem
          to="/customers"
          icon={<PeopleOutlineRounded />}
          label="Customers"
        />
        {/* <Divider /> */}
        <NavListItem
          to="/admin/settings"
          icon={<SettingsOutlined />}
          label="Settings"
        />
      </List>
    </Drawer>
  );
}
