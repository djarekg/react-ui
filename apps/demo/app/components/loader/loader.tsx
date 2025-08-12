import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  'use memo';

  return (
    <Box
      sx={{
        display: 'grid',
        placeContent: 'center',
        height: '100%',
      }}>
      <CircularProgress
        size={100}
        thickness={2}
      />
    </Box>
  );
}
