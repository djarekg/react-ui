import Notify from '@/components/notify/notify.js';
import { GetCustomerById, UpdateCustomer, type Customer } from '@/types/graphql.js';
import { useMutation, useQuery } from '@apollo/client/react/hooks';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { lazy, useCallback, useState, type SyntheticEvent } from 'react';
import { useParams, useSearchParams } from 'react-router';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));
const CustomerDetail = lazy(() => import('@/components/customer/customer-detail.js'));
const CustomerContacts = lazy(() => import('@/components/customer/customer-contacts.js'));

type SaveCustomerType = {
  __typename: string;
} & Omit<Customer, 'CustomerContact'>;

const Customer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState(searchParams.get('tab') || '1');
  const { id = '' } = useParams<{ id: string }>();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // customer query
  const { data, error, loading } = useQuery(GetCustomerById, {
    variables: { id },
  });
  // update customer mutation
  const [saveCustomer, { error: updateError }] = useMutation(UpdateCustomer);

  const handleTabChange = useCallback((_: SyntheticEvent, value: string) => {
    setSelectedTab(value);
    setSearchParams({ tab: value });
  }, []);

  const handleSave = useCallback(async (customer: Customer) => {
    const { state, stateId, __typename, ...customerCopy } = customer as unknown as SaveCustomerType;
    saveCustomer({ variables: { id: customerCopy.id, data: customerCopy } });
    setSnackbarOpen(true);
  }, []);

  if (error) return <ErrorMessage message={error.message} />;
  if (updateError) return <ErrorMessage message={updateError.message} />;
  if (loading) return null;

  return (
    <>
      <TabContext value={selectedTab}>
        <TabList
          onChange={handleTabChange}
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
          <CustomerDetail
            customer={data?.customer as Customer}
            onSave={handleSave}
          />
        </TabPanel>

        <TabPanel
          value="2"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CustomerContacts customerId={id} />
        </TabPanel>
      </TabContext>

      <Notify
        message="Customer saved successfully!"
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
      />
    </>
  );
};

export default Customer;
