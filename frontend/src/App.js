//router
import { Routes, Route } from "react-router-dom";
//component
import MainNavbar from "./components/navbar/mainNavbar";
import LoadingAndError from "./components/LoadingAndError/LoadingAndError";
import FormsUser from "./pages/formsUser";
import HomePage from "./pages/main";
import CreateHero from "./pages/createHero";
import GestionHeroes from "./pages/gestionHero";
//useFetch
import useFetch from "./customHooks/useFetch";
import useFetchUser from "./customHooks/useFetchUser";

/**
 * @author Loic Gosselke
 * @function [App]
 * @returns display current components in the screen navigator
 */
function App() {

    /**
     * @constant loggedUser pass current logged user to navbar
     * @type {object} user
     */
    const { loggedUser } = useFetchUser();

    /**
     * @constant isError show error if the first fetch fail
     * @type {string}
     * @default [null]
     * @constant isLoading show loading if fetch is pending
     * @type {boolean}
     * @default [false]
     */
    const { isError, isloading } = useFetch();

    return (
        <div className="App background">
            <MainNavbar logged={ loggedUser } />
            <LoadingAndError error={isError} loading={isloading} />
            <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/createhero" element={ <CreateHero/> } />
                <Route path="/gestionheroes" element={ <GestionHeroes/> } />
                <Route path="/register" element={ <FormsUser /> } />
                <Route path="/login" element={ <FormsUser /> } />
            </Routes>
        </div>
    );
}

export default App;