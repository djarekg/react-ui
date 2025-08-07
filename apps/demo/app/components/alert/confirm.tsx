import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type { FC } from 'react';
import styles from './confirm.module.css';

type ConfirmProps = {
  open: boolean;
  message: string;
  title?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: (result: boolean) => void;
};

const Confirm: FC<ConfirmProps> = ({
  open,
  message,
  title = 'Confirm',
  confirmButtonText = 'Yes',
  cancelButtonText = 'No',
  onConfirm,
}) => {
  return (
    <Dialog open={open}>
      <DialogTitle>
        <h2>{title}</h2>
      </DialogTitle>

      <DialogContent>
        <div className={styles.message}>{message}</div>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onConfirm(true)}>
          {confirmButtonText}
        </Button>
        <Button
          variant="outlined"
          onClick={() => onConfirm(false)}>
          {cancelButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
