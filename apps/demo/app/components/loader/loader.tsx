import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
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
};

export default Loader;
