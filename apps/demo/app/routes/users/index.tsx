import ErrorMessage from '@/components/error/error-message.js';
import { GetUsers } from '@/types/graphql.js';
import { useSuspenseQuery } from '@apollo/client/react/hooks';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

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
    width: 90,
    type: 'date',
    align: 'right',
    headerAlign: 'right',
    valueGetter: value => new Date(value),
  },
] as const;
const paginationModel = { page: 0, pageSize: 5 } as const;

export default function Users() {
  const { data, error } = useSuspenseQuery(GetUsers);

  if (error) return <ErrorMessage message={error.message} />;

  const { users } = data;

  return (
    <>
      <DataGrid
        rows={users}
        columns={columns}
        pageSizeOptions={[5, 10]}
        initialState={{ pagination: { paginationModel } }}
      />
    </>
  );
}
