import { GetCustomerById, type Customer } from '@/types/graphql.js';
import { useQuery } from '@apollo/client/react/hooks';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { lazy, useCallback, useState, type SyntheticEvent } from 'react';
import { useParams, useSearchParams } from 'react-router';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));
const CustomerDetail = lazy(() => import('@/components/customer/customer-detail.js'));
const CustomerContacts = lazy(() => import('@/components/customer/customer-contacts.js'));

const Customer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState(searchParams.get('tab') || '1');
  const { id = '' } = useParams<{ id: string }>();
  const { data, error, loading } = useQuery(GetCustomerById, {
    variables: { id },
  });

  const handleChange = useCallback((_: SyntheticEvent, value: string) => {
    setSelectedTab(value);
    setSearchParams({ tab: value });
  }, []);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <TabContext value={selectedTab}>
      <TabList
        onChange={handleChange}
        aria-label="Customer tabs">
        <Tab
          label="Details"
          value="1"
        />
        <Tab
          label="Contacts"
          value="2"
        />
      </TabList>
      <TabPanel
        value="1"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CustomerDetail customer={data?.customer as Customer} />
      </TabPanel>
      <TabPanel
        value="2"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CustomerContacts customerId={id} />
      </TabPanel>
    </TabContext>
  );
};

export default Customer;
