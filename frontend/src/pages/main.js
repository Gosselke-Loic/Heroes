import React from "react";
import RenderHeroes from "../components/main/renderHeroes";

/**
 * @constant
 * @type {View}
 * @returns Rendered component Homepage
 */
const HomePage = () => {

    return ( 
        <div className="homePage">
            <RenderHeroes />
        </div>
    );
}
 
export default HomePage;