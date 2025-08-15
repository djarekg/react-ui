import Alert, { type AlertColor } from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Snackbar from '@mui/material/Snackbar';

type NotifyProps = {
  duration?: number;
  message: string;
  severity?: AlertColor;
  open?: boolean;
  onClose?: () => void;
};

const SNACKBAR_SLOTS = { transition: Fade };
export default function Notify({
  duration = 3000,
  message,
  severity = 'success',
  open = false,
  onClose,
}: NotifyProps) {
  'use memo';

  const handleClose = () => onClose?.();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={duration}
      slots={SNACKBAR_SLOTS}
      onClose={handleClose}>
      <Alert
        severity={severity}
        variant="filled"
        onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
