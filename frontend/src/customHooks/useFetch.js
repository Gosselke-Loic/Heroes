import { useState, useEffect } from "react";
import { fetchHeroes } from "../context/slice/heroesSlice";
import { HeroesStore } from "../context/store";

/**
 * First fetch to update the state of the heroes store, fill with all heroes
 * @returns {string} return message for pending request and/or error message
 */
const useFetch = () => {
    const [ isloading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(null);

    useEffect(() => {

        const fetchData = async() => {
            try {
                setIsLoading(true);
                await HeroesStore.dispatch(fetchHeroes());
                setIsLoading(false);
            } catch (e) {
                setIsError(e.message)
                setIsLoading(false);
            }
        }

        return () => fetchData()
    }, [setIsError, setIsLoading]);

    return { isError, isloading };
}

export default useFetch;