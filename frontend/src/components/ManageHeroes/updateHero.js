import { Card, CardContent, TextField, Typography, Box, Stack, Button } from "@mui/material";
import { getUser } from "../../context/slice/userSlice";
import { updateHero } from "../../context/slice/heroesSlice";
import { HeroesStore } from "../../context/store";
import React, { useReducer, useState } from "react";
import formReducer from "../../forms/formReducer";
import { useSelector } from "react-redux";

/**
 * @param {object} props values of one hero
 * @returns render update form
 */
const UpdateHero = (props) => {

    const user = useSelector(getUser);
    const [ formData, action ] = useReducer(formReducer, props.heroData);
    const [ isError, setIsError ] = useState(null);
    const [ isFullfilled, setIsFullfilled ] = useState(null);
    
    /**
     * store key/value of all inputs and store in the reducer
     * @method
     * @param {object} event key/values from input form
     */
    const handleChange = (event) => {
        action({
            name: event.target.name,
            value: event.target.value,
        });
    };

    /**
     * dispatch the request to update, show success message and handle errors
     * @method
     * @param {Event} event preventDefault
     */
    const handleSubmit = (event) => { 
        event.preventDefault();
        try {
            const data = {
                body: formData,
                token: user.user.token 
            }
            HeroesStore.dispatch(updateHero(data));
            setIsFullfilled("Your hero is successfully updated")
        } catch (e) {
            setIsError("Error trying to update hero");
        }
    
        setTimeout(() => {
            action({
                reset: true
            })
        }, 2000);
    };

    /**
     * send prop to parent component to close modal
     */
    const handleClose = () => {
        props.fn()
    };

    return ( 
        <div className="updateHero">
            <Box
            sx={{ 
                backgroundColor: "info.dark",
                border: "3px solid black",
                padding: "1rem",
                position: "absolute",
                top: "10%",
                left: "40%", 
                width: "20vw"
            }}
            >
                <Card sx={{ border: "3px solid black", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                    <CardContent>
                        <Typography variant="h4" color={"primary"} mb={3}>Update Hero</Typography>
                        
                        {isError !== null 
                            ? <Typography variant="h5" color={"primary"} component="div" gutterBottom> { isError } </Typography>
                            : <Typography variant="h5" color={"primary"} component="div" gutterBottom> { isFullfilled } </Typography>
                        }

                        <Box component={"form"} onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ width: "20vw" }}>
                            <TextField
                            required
                            label= "Name"
                            variant="outlined"
                            sx={{ letterSpacing: "2px", input: { color: "white", fontWeight: "bold" } }}
                            color="secondary"
                            margin="normal"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField
                            InputProps={{ inputMode: "text" }}
                            type= "text"
                            label= "Skill"
                            variant="outlined"
                            sx={{ letterSpacing: "2px", input: { color: "white", fontWeight: "bold"}, marginLeft: "1rem"}}
                            color="secondary"
                            margin="normal"
                            name="skill"
                            value={formData.skill}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField
                            InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                            type= "number"
                            label= "Damage"
                            variant="outlined"
                            sx={{ letterSpacing: "2px", input: { color: "white", fontWeight: "bold" }}}
                            color="secondary"
                            margin="normal"
                            name="damage"
                            value={formData.damage}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField
                            InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                            type= "number"
                            label= "Defense"
                            variant="outlined"
                            sx={{ letterSpacing: "2px", input: { color: "white", fontWeight: "bold" }}}
                            color="secondary"
                            margin="normal"
                            name="defense"
                            value={formData.defense}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField
                            InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                            type= "number"
                            label= "Speed"
                            variant="outlined"
                            sx={{ letterSpacing: "2px", input: { color: "white", fontWeight: "bold" }}}
                            color="secondary"
                            margin="normal"
                            name="speed"
                            value={formData.speed}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField
                            InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                            type= "number"
                            label= "Gold"
                            variant="outlined"
                            sx={{ letterSpacing: "2px", input: { color: "white", fontWeight: "bold" } }}
                            color="secondary"
                            margin="normal"
                            name="gold"
                            value={formData.gold}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField
                            InputProps={{ inputMode: "text" }}
                            type= "text"
                            label= "Weapons"
                            variant="outlined"
                            sx={{ letterSpacing: "2px", input: { color: "white", fontWeight: "bold" }, marginLeft: "1rem" }}
                            color="secondary"
                            margin="normal"
                            name="weapons"
                            value={formData.weapons}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            />
                            <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            marginTop={3}
                            spacing={7}
                            >
                                <Button variant="contained" type="submit" size="small">Update</Button>
                                <Button component="button" variant="contained" size="small" color="success" onClick={handleClose}> Go Back</Button>
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
            </Box>    
        </div>
    );
}
 
export default UpdateHero;