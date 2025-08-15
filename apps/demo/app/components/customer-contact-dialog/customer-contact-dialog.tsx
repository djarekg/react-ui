import CustomerContactDetail from '@/components/customer-contact-detail/customer-contact-detail.js';
import type { CustomerContact } from '@/types/graphql.js';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

const DIALOG_CONTENT_SX = { padding: '3rem', paddingBottom: 0 };

type CustomerContactDialogProps = {
  customerContact: CustomerContact | null;
  open?: boolean;
  onClose?: () => void;
  onSave?: (customer: CustomerContact) => void;
};

export default function CustomerContactDialog({
  customerContact,
  open = false,
  onClose,
  onSave,
}: CustomerContactDialogProps) {
  'use memo';

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
      <DialogContent sx={DIALOG_CONTENT_SX}>
        <CustomerContactDetail
          customerContact={customerContact}
          onSave={onSave}
        />
      </DialogContent>
    </Dialog>
  );
}
