import ErrorMessage from '@/components/error/error-message.js';
import { GetUsers } from '@/types/graphql.js';
import { useSuspenseQuery } from '@apollo/client/react/hooks';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 170 },
  {
    field: 'state',
    headerName: 'State',
    width: 170,
    valueGetter: (value: { name: string }) => value.name,
  },
  {
    field: 'dateCreated',
    headerName: 'Created',
    width: 90,
    type: 'date',
    valueGetter: value => new Date(value),
  },
];
const paginationModel = { page: 0, pageSize: 5 };

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
