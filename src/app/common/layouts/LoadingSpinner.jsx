import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material/';

/**
 * Wraps a loading spinner
 */
function LoadingSpinner() {

    return (
        <Box sx={{ display: 'flex', width: '100vw', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    );
}

export default LoadingSpinner;
