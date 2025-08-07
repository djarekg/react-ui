import CustomerContactDetail from '@/components/customer/customer-contact-detail.js';
import type { CustomerContact } from '@/types/graphql.js';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import type { FC } from 'react';

type CustomerContactDialogProps = {
  customerContact: CustomerContact | null;
  open?: boolean;
  onClose?: () => void;
  onSave?: (customer: CustomerContact) => void;
};

const CustomerContactDialog: FC<CustomerContactDialogProps> = ({
  customerContact,
  open = false,
  onClose,
  onSave,
}) => {
  return (
    <Dialog
      aria-labelledby="customer-contact-dialog-title"
      open={open}
      maxWidth="lg"
      onClose={onClose}>
      <DialogTitle>Customer Contact Details</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}>
        <CloseOutlined />
      </IconButton>
      <DialogContent sx={{ padding: '3rem', paddingBottom: 0 }}>
        <CustomerContactDetail
          customerContact={customerContact}
          onSave={onSave}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CustomerContactDialog;
