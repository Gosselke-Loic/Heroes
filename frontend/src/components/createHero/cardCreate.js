import { Typography, Grid } from "@mui/material";
import FormCreateHero from "./formCreateHero.js/formCreateHero";
import React, { useState } from "react";

/**
 * create card for the new hero form 
 * @returns render component new hero gorm
 */
const CardCreate = () => {

    const [ isSubmit, setIsSubmit ] = useState(false);

    /**
     * if the is submitted, show success message
     * @param {boolean} data check submit is false or true
     */
    const pull_data = (data) => {
        if(data === true) {
            setIsSubmit(true)
        }

        setTimeout(() => {
            setIsSubmit(false);
        }, 3000);
    }

    return ( 
        <div className="cardCreate">
            {isSubmit && 
                <Typography variant="h4" gutterBottom sx={{ color: "orangered", textAlign: "center" }}>You hero are submitting...</Typography>  
            }
            <Grid
            container 
            spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <Grid container item xs={2} sm={4} md={4} justifyContent="center">
                    <FormCreateHero fn={pull_data} />
                </Grid>
            </Grid>
        </div>
    );
}
 
export default CardCreate;