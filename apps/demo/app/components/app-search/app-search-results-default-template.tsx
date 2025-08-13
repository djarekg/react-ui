import ProductsIcon from '@/components/icons/products.js';
import PeopleOutlineRounded from '@mui/icons-material/PeopleOutlineRounded';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import { NavLink } from 'react-router';
import styles from './app-search-results-default-template.module.css';

export default function AppSearchResultsDefaultTemplate() {
  return (
    <nav className={styles.nav}>
      <section>
        <NavLink
          to="/users"
          className={`${styles.link} app-command-palette-item-link`}>
          <PeopleOutlineRounded />
          Users
        </NavLink>
        <NavLink
          to="/customers"
          className={`${styles.link} app-command-palette-item-link`}>
          <ShoppingBagOutlined />
          Customers
        </NavLink>
        <NavLink
          to="/products"
          className={`${styles.link} app-command-palette-item-link`}>
          <ProductsIcon />
          Products
        </NavLink>
        <NavLink
          to="/admin/settings"
          className={`${styles.link} app-command-palette-item-link`}>
          <SettingsOutlined />
          Admin settings
        </NavLink>
      </section>
      <section>
        <span>action shortcuts...</span>
        <NavLink
          to={{
            pathname: '/users/0',
            search: '?m=new',
          }}
          className={`${styles.createLink} app-command-palette-item-link`}>
          create user
        </NavLink>
        <NavLink
          to={{
            pathname: '/customers/0',
            search: '?m=new',
          }}
          className={`${styles.createLink} app-command-palette-item-link`}>
          create customer
        </NavLink>
      </section>
    </nav>
  );
}
