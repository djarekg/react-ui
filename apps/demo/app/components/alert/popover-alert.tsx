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

  return (
    <Popover
      id={popoverId}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => onConfirm(false)}>
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
              onClick={() => onConfirm(true)}>
              YES
            </Button>
            <Button
              color="inherit"
              size="small"
              onClick={() => onConfirm(false)}>
              NO
            </Button>
          </>
        }>
        {message}
      </Alert>
    </Popover>
  );
}
