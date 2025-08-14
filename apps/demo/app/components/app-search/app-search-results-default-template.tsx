import ProductsIcon from '@/components/icons/products.js';
import PeopleOutlineRounded from '@mui/icons-material/PeopleOutlineRounded';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router';
import styles from './app-search-results-default-template.module.css';

export default function AppSearchResultsDefaultTemplate() {
  'use memo';

  return (
    <nav className={styles.nav}>
      <section>
        <Link
          to="/users"
          className={`${styles.link} app-command-palette-item-link`}>
          <PeopleOutlineRounded />
          Users
        </Link>
        <Link
          to="/customers"
          className={`${styles.link} app-command-palette-item-link`}>
          <ShoppingBagOutlined />
          Customers
        </Link>
        <Link
          to="/products"
          className={`${styles.link} app-command-palette-item-link`}>
          <ProductsIcon />
          Products
        </Link>
        <Link
          to="/admin/settings"
          className={`${styles.link} app-command-palette-item-link`}>
          <SettingsOutlined />
          Admin settings
        </Link>
      </section>
      <section>
        <span>action shortcuts...</span>
        <Link
          to={{
            pathname: '/users/0',
            search: '?m=new',
          }}
          className={`${styles.createLink} app-command-palette-item-link`}>
          create user
        </Link>
        <Link
          to={{
            pathname: '/customers/0',
            search: '?m=new',
          }}
          className={`${styles.createLink} app-command-palette-item-link`}>
          create customer
        </Link>
        <Link
          to={{
            pathname: '/products/0',
            search: '?m=new',
          }}
          className={`${styles.createLink} app-command-palette-item-link`}>
          create product
        </Link>
      </section>
    </nav>
  );
}
