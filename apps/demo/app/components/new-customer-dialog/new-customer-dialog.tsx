import NewCustomerDetail from '@/components/new-customer-detail/new-customer-detail.js';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

type NewCustomerDialogProps = {
  open: boolean;
  onCreate: (name: string) => void;
  onClose: () => void;
};

export default function NewCustomerDialog({ open, onClose }: NewCustomerDialogProps) {
  'use memo';

  return (
    <Dialog
      open={open}
      onClose={onClose}>
      <DialogTitle>New Customer</DialogTitle>
      <DialogContent sx={{ padding: '2rem' }}>
        <NewCustomerDetail />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>CANCEL</Button>
        <Button
          variant="outlined"
          onClick={onClose}>
          CREATE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
