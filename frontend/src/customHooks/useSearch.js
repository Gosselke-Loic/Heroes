// reducer from store
import { searchByName } from "../context/slice/heroesSlice";
import { useState, useEffect, useCallback } from "react";
// import use of store
import { HeroesStore } from "../context/store";
// debounce from lodash
import debounce from "lodash/debounce";

/**
 * debounce value from input search and filter from store
 * @returns {Function} collect all press key from the input search 
 */
const useSearch = () => {
    const [searchText, setSearchText] = useState("");
    
    const updateSearch = () => {
        HeroesStore.dispatch(searchByName(searchText))
    }
    // eslint-disable-next-line
    const delayedQuery = useCallback(debounce(updateSearch, 500), [searchText]);

    useEffect(() => {
        delayedQuery();

        return delayedQuery.cancel;
    }, [searchText, delayedQuery]);

    return { setSearchText };
}

export default useSearch;