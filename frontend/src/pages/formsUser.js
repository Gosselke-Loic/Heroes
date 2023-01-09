import React, { useReducer, useState } from "react";
//components from material ui
import { Card, Typography, CardContent, CardActions, Button, TextField, Box, Stack } from "@mui/material";
//Handle inputs and implement method to cleanup input
import formReducer from "../forms/formReducer";
//inital values from the form
import { initialValuesUser } from "../constants/consts";
//import store to dispatch methods 
import { HeroesStore } from "../context/store";
//import methods from react router
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import reducers from store 
import { postUserCreate, getCredentials } from '../context/slice/userSlice';
// custom hook to switch form (register/login)
import useGetProps from "../customHooks/useGetProps";

/**
 * @method [FormsUser]
 * @returns Render form to register/login
 */
const FormsUser = () => {

    /**
     * @methods 
     * Push to HomePage after register/login
     */
    const navigate = useNavigate();

    /**
     * @method
     * get pathname from url to switch register or login form
     */
    const location = useLocation();

    /**
     * @constant
     * @type {object}
     */
    const props = useGetProps(location.pathname);

    /**
     * Handle values from inputs
     */
    const [ formData, action ] = useReducer(formReducer, initialValuesUser);
    
    const [ isInfo, setIsInfo ] = useState(null);

    /**
     * @method [handleChange]
     * @param {object} event (key/values)
     * store all key/values from the form
     */
    const handleChange = (event) => {
        action({
            name: event.target.name,
            value: event.target.value,
        });
    };

    /**
     * @method [handleSubmit]
     * @param {Event} event event for preventDefault
     * Submit form (register ot login), set success message, push to Homepage and reset inputs
     * @Error show error message and cleanup the message
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(props.title === "Register") {
                await HeroesStore.dispatch(postUserCreate(formData));
            } else {
                await HeroesStore.dispatch(getCredentials(formData));
            }
            
            setIsInfo(props.success);
            setTimeout(() => {
                navigate("/", { replace: true });
                action({
                    reset: true
                })
            }, 3000);
        } catch (e) {
            setIsInfo(e.toString());
            setTimeout(() => {
                setIsInfo(null)
            }, 3000);
        }
    };
    
    return ( 
        <div className="formsUser">
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ width: "25vw" }}>
                    <Card sx={{ border: "3px solid black", backgroundColor: "rgba(0, 0, 0, 0.651)", mt: 3}}>
                        <Typography variant="h4" color={"primary"} marginLeft={2} gutterBottom>{ props.title }</Typography>
                        <CardContent>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={5} marginBottom={3}>
                                <TextField
                                required
                                type={"text"}
                                label= "username"
                                variant="outlined"
                                sx={{ letterSpacing: "2px", borderColor: "white", input: { color: "white", fontWeight: "bold" } }}
                                color="secondary"
                                margin="normal"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                />
                                <TextField
                                required
                                type={"password"}
                                label= "password"
                                variant="outlined"
                                sx={{ letterSpacing: "2px", borderColor: "white", input: { color: "white", fontWeight: "bold" } }}
                                color="secondary"
                                margin="normal"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                />
                            </Stack>
                            { isInfo !== null && <Typography variant="subtitle1" ml={1} sx={{ color: "yellow" }}>{ isInfo }</Typography>}
                        </CardContent>
                        <CardActions sx={{ justifyContent: "center", display: "flex" }}>
                            <Button variant="contained" type="submit" size="large">{ props.button }</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Stack>
        </div>
    );
}
 
export default FormsUser;