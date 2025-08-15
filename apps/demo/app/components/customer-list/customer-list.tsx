import { GetCustomers } from '@/types/graphql.js';
import { useQuery } from '@apollo/client/react/hooks';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import type { GridCellParams } from '@mui/x-data-grid/models';
import { lazy } from 'react';
import { useNavigate } from 'react-router';
import { columns } from './customer-datagrid-cols.js';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));

const INITIAL_STATE = { pagination: { paginationModel: { page: 0, pageSize: 10 } } };

export default function NewCustomerDetail() {
  'use memo';

  const navigate = useNavigate();
  const { data: { customers = [] } = {}, error, loading } = useQuery(GetCustomers);

  const onCellClick = ({ row: { id }, field }: GridCellParams) => {
    if (field === 'open') {
      navigate(`/customers/${id}`, { viewTransition: true });
    }
  };

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <DataGrid
      rows={customers}
      columns={columns}
      pageSizeOptions={[5, 10, 20]}
      initialState={INITIAL_STATE}
      loading={loading}
      onCellClick={onCellClick}
    />
  );
}
