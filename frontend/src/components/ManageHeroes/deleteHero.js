import { Box, Typography, Stack } from "@mui/material";

/**
 * @param {object} children slot
 * @returns render the delete modal
 */
const DeleteHero = ({children}) => {
    return ( 
        <div className="deleteHero">
            <Box
            sx={{ 
                backgroundColor: "info.dark",
                border: "3px solid black",
                padding: "1rem",
                position: "absolute",
                top: "40%",
                left: "40%", 
                width: "20vw"
            }}
            >
                <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: "center", color: "crimson" }}> Do you want to kill this hero?</Typography>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={0}
                >
                    { children }
                </Stack>
            </Box>
        </div>
    );
}
 
export default DeleteHero;