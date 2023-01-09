import React from "react";
import { AppBar, Box, Toolbar, Typography, TextField, Container, Divider, Button } from "@mui/material";
import useSearch from "../../customHooks/useSearch";
import { Link } from "react-router-dom";

/**
 * render the navbar
 * @param {object} logged user if logged
 * @returns html for the navbar
 */
const MainNavbar = ({ logged }) => {

    /**
     * custom hook
     */
    const { setSearchText } = useSearch();

    /**
     * remove localStore and crendential session (logout)
     */
    const removeUser = () => {
        window.localStorage.removeItem("userLogged");
    };
    
    return ( 
        <div className="mainNavbar">
            <AppBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.9)"}} position="static">
                <Container maxWidth="xl" sx={{ margin: 0 }}>
                    <Toolbar disableGutters>
                        <Typography variant="h4" sx={{ display: { md: 'flex' }, mr: 2 }}>
                            Heroes
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "flex" }, justifyContent: "center" }}>
                            <Link to={"/"} style={{ textDecoration: "none", color: "crimson", fontSize: "1.5rem", marginRight: "1rem" }}>Homepage</Link>
                            <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "gray" }} />
                            <Link to={"/createhero"} style={{ textDecoration: "none", color: "crimson", fontSize: "1.5rem", marginLeft: "1rem", marginRight: "1rem" }}>Create Hero</Link>
                            <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "gray" }} />
                            <Link to={"/gestionheroes"} style={{ textDecoration: "none", color: "crimson", fontSize: "1.5rem", marginLeft: "1rem" }}>Manage Heroes</Link>
                        </Box>
                        <Box sx={{ flexGrow: 0, display: { md: 'flex' }, marginRight: 5}}>   
                            <TextField
                            size="small"
                            type={"search"}
                            variant="outlined"
                            placeholder="Search..."
                            sx={{ backgroundColor: "ghostwhite", letterSpacing: "2px", input: { color: "black", fontWeight: "bold" } }}
                            onChange = {(e) => setSearchText(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ display: { md: 'flex' }}}>
                            { logged !== undefined
                            ?
                            <>
                                <Typography variant="h5" sx={{ marginRight: 3 }} > { logged.name } is logged </Typography>
                                <Button variant="contained" size="small" onClick={removeUser}>Logout</Button>
                            </>
                            :
                                <>
                                    <Button variant="contained" size="small" sx={{ marginRight: 3 }} component={Link} to={"/register"}>Register</Button>
                                    <Button variant="contained" size="small" component={Link} to={"/login"}>Login</Button>
                                </>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
 
export default MainNavbar;