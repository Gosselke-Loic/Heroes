import { useEffect, useState } from "react";

/**
 * Find hero from the id of the button and open the modal
 * @param {object} data array of heroes 
 * @returns collection of objects and methods to handle update heroes
 */
const useUpdate = (data) => {
    const [ heroData, setHeroData ] = useState(undefined);
    const [ buttonId, setButtonId ] = useState(undefined);
    const [ openUP, setOpenUP ] = useState(false);

    useEffect(() => {
        if (buttonId !== undefined) {
            const hero = data.find((item) => item._id === buttonId)
            setHeroData(hero);
            setOpenUP(true);
        }
        
    }, [buttonId, setHeroData, data, setOpenUP])

    return { heroData, openUP, setButtonId, setOpenUP }
}

export default useUpdate;