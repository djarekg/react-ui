import FolderOpenOutlined from '@mui/icons-material/FolderOpenOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
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
  {
    field: 'open',
    headerName: '',
    align: 'right',
    width: 55,
    maxWidth: 55,
    hideSortIcons: true,
    disableColumnMenu: true,
    disableExport: true,
    disableReorder: true,
    cellClassName: 'app-data-grid-cell-action',
    renderCell: () => (
      <Tooltip title="Open customer">
        <IconButton>
          <FolderOpenOutlined />
        </IconButton>
      </Tooltip>
    ),
  },
] as const;
