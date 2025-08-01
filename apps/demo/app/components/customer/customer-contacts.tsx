import { GetCustomerContactsByCustomerId } from '@/types/graphql.js';
import { useQuery } from '@apollo/client/react/hooks';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import type { GridColDef, GridRowParams } from '@mui/x-data-grid/models';
import { lazy, useCallback, type HTMLAttributes } from 'react';
import { useNavigate } from 'react-router';

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
] as const;
const paginationModel = { page: 0, pageSize: 5 } as const;

type CustomerContactsProps = {
  customerId: string;
} & HTMLAttributes<HTMLElement>;

const CustomerContacts = ({ customerId }: CustomerContactsProps) => {
  const navigate = useNavigate();
  const { data, error, loading } = useQuery(GetCustomerContactsByCustomerId, {
    variables: { customerId },
    fetchPolicy: 'cache-and-network',
  });

  // When a row is selected, navigate to the customer details page
  const handleRowClick = useCallback(({ row: { id } }: GridRowParams) => {
    navigate(`/customers/${id}`, { viewTransition: true });
  }, []);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <DataGrid
      rows={data?.customerContacts}
      columns={columns}
      pageSizeOptions={[5, 10, 20]}
      initialState={{ pagination: { paginationModel } }}
      loading={loading}
      onRowClick={handleRowClick}
      sx={{ width: '100%' }}
    />
  );
};

export default CustomerContacts;
