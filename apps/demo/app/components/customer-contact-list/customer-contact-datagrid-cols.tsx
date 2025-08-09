import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import FolderOpenOutlined from '@mui/icons-material/FolderOpenOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { GridColDef } from '@mui/x-data-grid/models';
import { lazy } from 'react';

const PopoverAlert = lazy(() => import('@/components/alert/popover-alert.js'));

export const getColumns = (
  deletePopoverId: string,
  handleDeleteClick: (event: React.MouseEvent<HTMLElement>) => void
): GridColDef[] =>
  [
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
      align: 'right',
      width: 50,
      maxWidth: 50,
      hideSortIcons: true,
      disableColumnMenu: true,
      disableExport: true,
      disableReorder: true,
      cellClassName: 'app-data-grid-cell-action',
      renderCell: () => (
        <Tooltip title="Open customer contact">
          <IconButton>
            <FolderOpenOutlined />
          </IconButton>
        </Tooltip>
      ),
    },
    {
      field: 'delete',
      headerName: '',
      align: 'right',
      width: 50,
      maxWidth: 50,
      hideSortIcons: true,
      disableColumnMenu: true,
      disableExport: true,
      disableReorder: true,
      cellClassName: 'app-data-grid-cell-action',
      renderCell: () => {
        return (
          <>
            <Tooltip title="Delete customer contact">
              <IconButton
                aria-describedby={deletePopoverId}
                onClick={handleDeleteClick}>
                <DeleteOutlineOutlined />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ] as const;
