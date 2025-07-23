import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <Box
      sx={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
      }}>
      <CircularProgress
        size={100}
        thickness={2}
      />
    </Box>
  );
}
