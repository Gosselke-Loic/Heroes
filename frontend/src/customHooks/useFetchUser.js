import { useEffect, useState } from "react";
import { HeroesStore } from "../context/store";
//reducer to store crendentials
import { getFromLocalStorage } from "../context/slice/userSlice";

/**
 * call reducer to store in the localStorage and update the state of the user store
 * @returns {object} credendials 
 */
const useFetchUser = () => {
    
    const [loggedUser, setUser] = useState(undefined);
    useEffect(() => {

        const fetchUser = () => {
            const user = window.localStorage.getItem("userLogged");
            if(user) {
                setUser(JSON.parse(user))
            }
            HeroesStore.dispatch(getFromLocalStorage(JSON.parse(user)));
        };

        return () => fetchUser();
    }, []);

    return { loggedUser };
}
 
export default useFetchUser;