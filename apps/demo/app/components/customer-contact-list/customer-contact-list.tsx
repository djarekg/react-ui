import PopoverAlert from '@/components/alert/popover-alert.js';
import {
  DeleteCustomerContact,
  GetCustomerContactsByCustomerId,
  UpdateCustomerContact,
  type CustomerContact,
} from '@/types/graphql.js';
import { useMutation, useQuery } from '@apollo/client/react/hooks';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import type { GridCellParams, MuiEvent } from '@mui/x-data-grid/models';
import { lazy, useId, useState, type HTMLAttributes } from 'react';
import { getColumns } from './customer-contact-datagrid-cols.js';

const CustomerContactDialog = lazy(
  () => import('@/components/customer-contact-dialog/customer-contact-dialog.js')
);
const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));

type CustomerContactListProps = {
  customerId: string;
} & HTMLAttributes<HTMLElement>;

const CustomerContactList = ({ customerId }: CustomerContactListProps) => {
  'use memo';

  const deletePopoverId = useId();
  const [deleteAnchorEl, setDeleteAnchorEl] = useState<null | HTMLElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [customerContact, setCustomerContact] = useState<CustomerContact | null>(null);

  // customer contacts query
  const { data, error, loading, refetch } = useQuery(GetCustomerContactsByCustomerId, {
    variables: { customerId },
    fetchPolicy: 'cache-and-network',
  });

  // customer contacts mutation
  const [updateCustomerContact] = useMutation(UpdateCustomerContact);

  // customer contact delete
  const [deleteCustomerContact] = useMutation(DeleteCustomerContact);

  const handleCellClick = async ({ field, row }: GridCellParams, e: MuiEvent<React.MouseEvent>) => {
    if (field === 'open') {
      setCustomerContact(row);
      setDialogOpen(true);
    }
  };

  const handleDeleteClick = async (confirmed: boolean) => {
    setDeleteAnchorEl(null);

    if (confirmed) {
      await deleteCustomerContact({
        variables: {
          id: customerContact?.id!,
        },
      });
      await refetch();
    }
  };

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
        columns={getColumns(deletePopoverId, e => setDeleteAnchorEl(e.currentTarget))}
        pageSizeOptions={[5, 10, 20]}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
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
      <PopoverAlert
        message="Are you sure you want to delete this customer contact?"
        popoverId={deletePopoverId}
        anchorEl={deleteAnchorEl}
        onConfirm={handleDeleteClick}
      />
    </>
  );
};

export default CustomerContactList;
