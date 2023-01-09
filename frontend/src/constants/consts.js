import { createTheme } from '@mui/material';

/**
 * path for request axios
 */
const PATH_ROUTES = {
    heroes: "api/heroes",
    heroesByName: "api/heroes?name_like=",
    heroById: "api/heroes/",
    register: "api/heroes/register",
    login: "api/heroes/login"
};

/**
 * initial values for heroes formReducer
 */
const initialValues = {
    name: "",
    skill: "",
    healthPoint: 10,
    damage: 0,
    defense: 0,
    speed: 0,
    level: 7,
    gold: 0,
    weapons: ""
};

/**
 * inital values for user formReducer
 */
const initialValuesUser = {
    username: "",
    password: ""
};

/**
 * custom components material ui
 */
const theme = createTheme({
    palette: {
        primary: {
            main: "#b71c1c", //red
        },
        secondary: {
            main: "#fff", //orange
        },
        info: {
            main: "#455a64", //blue grey
        },
        success: {
            main: "#00c853" //light green
        },
        error: {
            main: "#ffd600" //yellow moutard
        },
        warning: {
            main: "#aa00ff" //purple cyber
        },
        grey: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#f5f5f5",
            A200: "#eeeeee",
            A400: "#bdbdbd",
            A700: "#616161"
        },
        action: {
            disabled: "#fff"
        },
        text: {
            primary: "#fff",
            secondary: "#000000",
            success: "#00c853",
            disabled: "#fff",
        },
    },
    typography: {
      fontFamily: "Texturina",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700, 
    },
});

/**
 * values render register form
 */
const register = {
    success: "user create successfully",
    title: "Register",
    button: "create user"
};

/**
 * values render login form
 */
const login = {
    success: "logged successfully",
    title: "Login",
    button: "login"
}

export {PATH_ROUTES, initialValues , theme, initialValuesUser, login, register};