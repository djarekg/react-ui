import NavListItem from '@/components/nav-list-item/nav-list-item.js';
import { useSidenavContext } from '@/components/sidenav/sidenav-provider.js';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import PeopleOutlineRounded from '@mui/icons-material/PeopleOutlineRounded';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import { type SxProps } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
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
      className={styles.sidenav}>
      <header className={styles.header}>
        <h1 className={styles.appSidenavTitle}>React UI</h1>
      </header>
      <List
        component="nav"
        onClickCapture={setOpenFalse}>
        <NavListItem
          to="/"
          icon={<HomeOutlined />}
          label="Home"
          className={styles.listItem}
        />
        <NavListItem
          to="/users"
          icon={<PeopleOutlineRounded />}
          label="Users"
          className={styles.listItem}
        />
        <NavListItem
          to="/customers"
          icon={<ShoppingBagOutlined />}
          label="Customers"
          className={styles.listItem}
        />
        <NavListItem
          to="/admin/settings"
          icon={<SettingsOutlined />}
          label="Settings"
          className={styles.listItem}
        />
      </List>
    </Drawer>
  );
}
