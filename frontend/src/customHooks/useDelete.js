import { useEffect, useState } from "react";

/**
 * handle delete function with useEffect
 * @returns collection of objects and function to handle the delete function
 */
const useDelete = () => {
    const [ openDEL, setOpenDEL ] = useState(false);
    const [ buttonDel, setButtonDel ] = useState(undefined);
    
    useEffect(() => {
        if(buttonDel !== undefined) {
            setOpenDEL(true);
        }
    }, [buttonDel, setOpenDEL]);

    return { openDEL, buttonDel, setButtonDel, setOpenDEL }
};

export default useDelete;