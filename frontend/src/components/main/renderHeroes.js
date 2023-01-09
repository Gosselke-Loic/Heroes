import React from "react";
import { filterHeroes } from "../../context/slice/heroesSlice";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import CardHeroes from "./cardHeroes";

/**
 * @returns conection to the parent and the card to show all heroes
 */
const RenderHeroes = () => {

    /**
     * @constant
     * @type {Array}
     */
    const data = useSelector(filterHeroes);
   
    return ( 
        <div className="renderHeroes">
            <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
            sx= {{ marginTop: "1rem", marginX: "2rem" }}
            >
               
                {data && <CardHeroes data={ data } /> }
            </Stack>
        </div>
    );
}
 
export default RenderHeroes;