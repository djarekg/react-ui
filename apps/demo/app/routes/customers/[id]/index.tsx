import Notify from '@/components/notify/notify.js';
import type { FormModeType } from '@/core/constants/form-mode.js';
import { CreateCustomer, GetCustomerById, UpdateCustomer, type Customer } from '@/types/graphql.js';
import { useMutation, useQuery } from '@apollo/client/react/hooks';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { lazy, useState, type SyntheticEvent } from 'react';
import { useParams, useSearchParams } from 'react-router';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));
const CustomerDetail = lazy(() => import('@/components/customer-detail/customer-detail.js'));
const CustomerContactList = lazy(
  () => import('@/components/customer-contact-list/customer-contact-list.js')
);

export default function Customer() {
  'use memo';

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState(searchParams.get('tab') || '1');
  const [formMode, setFormMode] = useState<FormModeType>(
    (searchParams.get('m') as FormModeType) || 'view'
  );
  const { id = '' } = useParams<{ id: string }>();

  const { data, error, loading } = useQuery(GetCustomerById, {
    variables: { id },
  });
  const [saveCustomer, { error: updateError }] = useMutation(UpdateCustomer);
  const [createCustomer] = useMutation(CreateCustomer);

  const handleSave = async (customer: Customer) => {
    const customerVariables = {
      id: customer.id,
      name: customer.name,
      streetAddress: customer.streetAddress,
      streetAddress2: customer.streetAddress2?.toString()!,
      city: customer.city,
      zip: customer.zip,
      phone: customer.phone,
      stateId: customer.state.id,
    };

    if (formMode === 'new') {
      const { data } = await createCustomer({
        variables: customerVariables,
      });

      setSearchParams({ id: data!.createOneCustomer.id, m: 'view' });
    } else {
      await saveCustomer({
        variables: customerVariables,
      });
    }

    setSnackbarOpen(true);
  };

  const handleTabChange = (_: SyntheticEvent, value: string) => {
    setSelectedTab(value);
    setSearchParams({ tab: value });
  };

  if (loading) return null;
  if (error) return <ErrorMessage message={error.message} />;
  if (updateError) return <ErrorMessage message={updateError.message} />;

  const customer = data?.customer;

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
            customer={customer as Customer}
            onSave={handleSave}
          />
        </TabPanel>

        <TabPanel
          value="2"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CustomerContactList customerId={customer?.id!} />
        </TabPanel>
      </TabContext>

      <Notify
        message="Customer saved successfully!"
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
      />
    </>
  );
}
