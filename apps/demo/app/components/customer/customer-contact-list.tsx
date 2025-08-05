import {
  GetCustomerContactsByCustomerId,
  UpdateCustomerContact,
  type CustomerContact,
} from '@/types/graphql.js';
import { useMutation, useQuery } from '@apollo/client/react/hooks';
import FolderOpenOutlined from '@mui/icons-material/FolderOpenOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import type { GridCellParams, GridColDef } from '@mui/x-data-grid/models';
import { lazy, useCallback, useState, type HTMLAttributes } from 'react';

const CustomerContactDialog = lazy(
  () => import('@/components/customer/customer-contact-dialog.js')
);
const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200, flex: 1 },
  { field: 'phone', headerName: 'Phone', width: 190 },
  {
    field: 'state',
    headerName: 'State',
    width: 170,
    valueGetter: (value: { name: string }) => value.name,
  },
  {
    field: 'dateCreated',
    headerName: 'Created',
    width: 120,
    type: 'date',
    align: 'right',
    headerAlign: 'right',
    valueGetter: value => new Date(value),
  },
  {
    field: 'open',
    headerName: '',
    align: 'center',
    width: 60,
    maxWidth: 60,
    renderCell: () => (
      <Tooltip title="Open customer contact">
        <IconButton>
          <FolderOpenOutlined />
        </IconButton>
      </Tooltip>
    ),
  },
] as const;
const paginationModel = { page: 0, pageSize: 5 } as const;

type CustomerContactListProps = {
  customerId: string;
} & HTMLAttributes<HTMLElement>;

const CustomerContactList = ({ customerId }: CustomerContactListProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [customerContact, setCustomerContact] = useState<CustomerContact | null>(null);

  // customer contacts query
  const { data, error, loading } = useQuery(GetCustomerContactsByCustomerId, {
    variables: { customerId },
    fetchPolicy: 'cache-and-network',
  });

  // customer contacts mutation
  const [updateCustomerContact] = useMutation(UpdateCustomerContact);

  const handleCellClick = useCallback(({ field, row }: GridCellParams) => {
    if (field === 'open') {
      setCustomerContact(row);
      setDialogOpen(true);
    }
  }, []);

  const handleSave = async (updatedContact: CustomerContact) => {
    const { errors } = await updateCustomerContact({
      variables: {
        id: updatedContact.id,
        data: {
          firstName: updatedContact.firstName,
          lastName: updatedContact.lastName,
          email: updatedContact.email,
          phone: updatedContact.phone,
          streetAddress: updatedContact.streetAddress,
          city: updatedContact.city,
          zip: updatedContact.zip,
        },
      },
    });
    setCustomerContact(updatedContact);
  };

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <DataGrid
        rows={data?.customerContacts}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        initialState={{ pagination: { paginationModel } }}
        loading={loading}
        sx={{ width: '100%' }}
        onCellClick={handleCellClick}
      />
      <CustomerContactDialog
        customerContact={customerContact}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleSave}
      />
    </>
  );
};

export default CustomerContactList;
