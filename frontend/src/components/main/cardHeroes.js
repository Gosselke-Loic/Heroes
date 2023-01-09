import React from "react";
import { Card, CardContent, CardActions, Typography, Grid, Stack, Divider } from "@mui/material";

/**
 * @param {Array} data All heroes
 * @returns render Grid cards with all heroes
 */
const CardHeroes = ({ data }) => {
    return ( 
        <div className="cardHeroes">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(data).map((heroe) => (
                    <Grid item xs={2} sm={4} md={4} key={heroe._id}>
                        <Card sx={{ border: "3px solid black", backgroundColor: "rgba(0, 0, 0, 0.651)" }}>
                            <CardContent>
                                <Typography variant="h3" component="div" gutterBottom sx={{ fontWeight: "bold", color: "Moccasin", textDecoration: "underline", textAlign: "center" }}> {heroe.name} </Typography>
                                <Typography variant="h5" gutterBottom component="div" mt={2} paragraph={true}> <span style={{ textDecoration: "underline", color: "SandyBrown" }}>Skill:</span>  { heroe.skill } </Typography>
                                <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={1}
                                sx= {{ marginLeft: "1rem" }}
                                >
                                    <Typography variant="h6"> <span style={{ textDecoration: "underline", color: "FireBrick", marginRight: "1rem" }}> Lifes:</span> { heroe.healthPoints }. </Typography>
                                    <Typography variant="h6"> <span style={{ textDecoration: "underline", color: "Crimson", marginRight: "1rem" }}> Damage:</span> { heroe.damage }. </Typography>
                                    <Typography variant="h6"> <span style={{ textDecoration: "underline", color: "Crimson", marginRight: "1rem" }}> Defense:</span> { heroe.defense }. </Typography>
                                    <Typography variant="h6"> <span style={{ textDecoration: "underline", color: "Crimson", marginRight: "1rem" }}> Speed:</span> { heroe.speed }. </Typography>
                                    <Typography variant="h6"> <span style={{ textDecoration: "underline", color: "Gold", marginRight: "1rem" }}> Gold:</span> { heroe.gold }. </Typography>
                                </Stack>
                            </CardContent>
                            <Divider variant="middle" textAlign="center" sx={{ backgroundColor: "gray" }}/>
                            <CardActions sx={{ justifyContent: "center", padding: "1rem" }}>
                                <Typography variant="h5" gutterBottom component="div" paragraph={true}> <span style={{ textDecoration: "underline", color: "SandyBrown" }}>Weapons:</span>  { heroe.weapons } </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
 
export default CardHeroes;