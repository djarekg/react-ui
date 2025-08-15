import QuestionMarkOutlined from '@mui/icons-material/QuestionMarkOutlined';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

type PopoverAlertProps = {
  message: string;
  popoverId: string;
  anchorEl: HTMLElement | null;
  onConfirm: (confirmed: boolean) => void;
};

export default function PopoverAlert({
  message,
  popoverId,
  anchorEl,
  onConfirm,
}: PopoverAlertProps) {
  'ues memo';

  const handleCloseFalse = () => onConfirm(false);
  const handleCloseTrue = () => onConfirm(true);

  return (
    <Popover
      id={popoverId}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleCloseFalse}>
      <Alert
        variant="outlined"
        severity="error"
        icon={<QuestionMarkOutlined />}
        sx={{
          background: theme => theme.palette.background.default,
          color: theme => theme.palette.text.primary,
        }}
        action={
          <>
            <Button
              autoFocus
              color="inherit"
              size="small"
              onClick={handleCloseTrue}>
              YES
            </Button>
            <Button
              color="inherit"
              size="small"
              onClick={handleCloseFalse}>
              NO
            </Button>
          </>
        }>
        {message}
      </Alert>
    </Popover>
  );
}
