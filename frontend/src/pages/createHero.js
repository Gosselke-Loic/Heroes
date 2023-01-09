import React from "react";
//import card component
import CardCreate from "../components/createHero/cardCreate";

/**
 * Funtional component
 * @returns render the form to create new heroes
 */
const CreateHero = () => {
    return ( 
        <div className="createHero">
            <CardCreate/>
        </div>
    );
}
 
export default CreateHero;