import CustomerList from '@/components/customer-list/customer-list.js';
import AddCircleOutlineOutlined from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import styles from './index.module.css';

export default function Customers() {
  'use memo';

  const navigate = useNavigate();
  const handleAddCustomer = () => navigate('/customers/0?m=new', { viewTransition: true });

  return (
    <>
      <div className={styles.actions}>
        <Tooltip title="Add Customer">
          <IconButton onClick={handleAddCustomer}>
            <AddCircleOutlineOutlined />
          </IconButton>
        </Tooltip>
      </div>
      <CustomerList />
    </>
  );
}
