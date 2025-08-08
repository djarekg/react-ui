import type { GridColDef } from '@mui/x-data-grid/models';

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150, flex: 1 },
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
