import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const BOX_SX = {
  display: 'grid',
  placeContent: 'center',
  height: '100%',
};

export default function Loader() {
  'use memo';

  return (
    <Box sx={BOX_SX}>
      <CircularProgress
        size={100}
        thickness={2}
      />
    </Box>
  );
}
