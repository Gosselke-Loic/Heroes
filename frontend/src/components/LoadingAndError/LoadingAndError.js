// components material ui
import { Typography, Alert, AlertTitle, Stack } from "@mui/material";

/**
 * @param {string} error render error in html
 * @param {string} loading  render loading in html
 * @returns render component to handle errors and loading
 */
const LoadingAndError = ({ error, loading }) => {
    return ( 
        <div className="loadingAndErro">
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={3}
            >
                {loading === true && <Typography variant="h2" component="div" mt={3} gutterBottom sx={{ color: "red" }}>Loading...</Typography>}
                {error !== null && <Alert severity="error"><AlertTitle>Error</AlertTitle>{ error }</Alert>}
            </Stack>
        </div>
    );
}
 
export default LoadingAndError;