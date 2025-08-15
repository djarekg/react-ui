import ProductsIcon from '@/components/icons/products.js';
import PeopleOutlineRounded from '@mui/icons-material/PeopleOutlineRounded';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router';
import styles from './app-search-results-default-template.module.css';

const LINK_CLASS_NAME = `${styles.link} app-command-palette-item-link`;
const CREATE_LINK_CLASS_NAME = `${styles.createLink} app-command-palette-item-link`;

export default function AppSearchResultsDefaultTemplate() {
  'use memo';

  return (
    <nav className={styles.nav}>
      <section>
        <Link
          to="/users"
          className={LINK_CLASS_NAME}>
          <PeopleOutlineRounded />
          Users
        </Link>
        <Link
          to="/customers"
          className={LINK_CLASS_NAME}>
          <ShoppingBagOutlined />
          Customers
        </Link>
        <Link
          to="/products"
          className={LINK_CLASS_NAME}>
          <ProductsIcon />
          Products
        </Link>
        <Link
          to="/admin/settings"
          className={LINK_CLASS_NAME}>
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
          className={CREATE_LINK_CLASS_NAME}>
          create user
        </Link>
        <Link
          to={{
            pathname: '/customers/0',
            search: '?m=new',
          }}
          className={CREATE_LINK_CLASS_NAME}>
          create customer
        </Link>
        <Link
          to={{
            pathname: '/products/0',
            search: '?m=new',
          }}
          className={CREATE_LINK_CLASS_NAME}>
          create product
        </Link>
      </section>
    </nav>
  );
}
