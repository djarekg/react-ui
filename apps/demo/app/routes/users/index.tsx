import { GetUsers } from '@/types/graphql.js';
import { useQuery } from '@apollo/client/react/hooks';
import { DataGrid, type GridColDef, type GridRowParams } from '@mui/x-data-grid';
import { lazy, useCallback } from 'react';
import { useNavigate } from 'react-router';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200, flex: 1 },
  { field: 'phone', headerName: 'Phone', width: 170 },
  {
    field: 'state',
    headerName: 'State',
    width: 170,
    valueGetter: (value: { name: string }) => value.name,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 150,
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

const Users = () => {
  const { data, error, loading } = useQuery(GetUsers);
  const navigate = useNavigate();
  const handleRowClick = useCallback(({ row: { id } }: GridRowParams) => {
    navigate(`/users/${id}`, { viewTransition: true });
  }, []);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <DataGrid
      rows={data?.users}
      columns={columns}
      pageSizeOptions={[5, 10]}
      initialState={{ pagination: { paginationModel } }}
      loading={loading}
      onRowClick={handleRowClick}
    />
  );
};

export default Users;
