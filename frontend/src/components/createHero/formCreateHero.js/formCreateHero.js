import { Card, CardContent, TextField, Typography, Box, Stack, Button } from "@mui/material";
import { fetchPostHeroes } from "../../../context/slice/heroesSlice";
import { getUser } from "../../../context/slice/userSlice";
import { initialValues } from "../../../constants/consts";
import { HeroesStore } from "../../../context/store";
import formReducer from "../../../forms/formReducer";
import React, { useReducer, useState } from "react";
import { useSelector } from "react-redux";

/**
 * Render and have the logic to create new hero form
 * @param {object} props 
 * @returns create new hero form
 */
const FormCreateHero = (props) => {
    
    //get user from store
    const user = useSelector(getUser);
    //store values of the inputs
    const [formData, dispatch] = useReducer(formReducer, initialValues);
    //handle errors
    const [isError, setIsError] = useState([])
    //default text
    const sumAttribute = "Sum of Damage, Defense and speed would be 7.";

    /**
     * dispatch new hero, after 3 sec close the modal, handle if errors
     * @method
     * @async
     * @param {Event} event preventDefault
     */
    const handleSubmit = async (event) => { 
        event.preventDefault();
        try {
            const data = {
                body: formData,
                token: user.user.token
            }
            await HeroesStore.dispatch(fetchPostHeroes(data));
            
            props.fn(true)
            setTimeout(() => {
                dispatch({
                    reset: true
                })
            }, 3000); 
        } catch (e) {
            setIsError(e.toString());
        }  
    }

    /**
     * @param {object} event key/value store all inputs in the reducer
     */
    const handleChange = (event) => {
        dispatch({
            name: event.target.name,
            value: event.target.value,
        });
    };

    return ( 
        <div className="formCreateHero">
            <Card sx={{ border: "3px solid black", backgroundColor: "rgba(0, 0, 0, 0.651)", mt: 3}}>
                <CardContent>
                    <Typography variant="h4" color={"primary"} mb={3}>Create Your Hero</Typography>
                    
                    <Typography variant="subtitle1" ml={1} sx={{ color: "yellow" }}>{ isError !== null ? isError : sumAttribute }</Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ width: "20vw" }}>

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
                        spacing={0}
                        >
                            <Button variant="contained" type="submit" size="large">Create</Button>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}
 
export default FormCreateHero;