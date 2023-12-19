import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material/';

/**
 * Wraps a loading spinner
 */
function LoadingSpinner({ fullPage }) {

    return (
        <Box sx={{
            display: 'flex',
            width: fullPage ? '100vw' : "100%",
            height: fullPage ? '100vh' : "100%",
            alignItems: 'center', justifyContent: 'center'
        }}>
            <CircularProgress />
        </Box>
    );
}

export default LoadingSpinner;
