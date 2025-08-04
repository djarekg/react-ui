import Alert, { type AlertColor } from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Snackbar from '@mui/material/Snackbar';
import { useCallback, type FC } from 'react';

type NotifyProps = {
  duration?: number;
  message: string;
  severity?: AlertColor;
  open?: boolean;
  onClose?: () => void;
};

const Notify: FC<NotifyProps> = ({
  duration = 3000,
  message,
  severity = 'success',
  open = false,
  onClose,
}) => {
  const handleClose = useCallback(() => onClose?.(), []);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={duration}
      slots={{ transition: Fade }}
      onClose={handleClose}>
      <Alert
        severity={severity}
        variant="filled"
        onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notify;
