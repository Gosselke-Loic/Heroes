import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../libs/axios";
import { PATH_ROUTES } from "../../constants/consts";

/**
 * @constant 
 * @type {object}
 * initial state for user store
 */
const initialState = {
    user: null,
};

/**
 * Send post request to store new user and handle errors
 * @method [postUserCreate]
 * @async
 */
export const postUserCreate = createAsyncThunk("user/createUser", async (newUser) => {
    try {
        console.log("[serviceUser][postUserCreate] Request to create new user was sended")
        await post(PATH_ROUTES.register, newUser);
    } catch (e) {
        console.log("[serviceUser][postUserCreate] Error trying to create new user", e);
        throw new Error(e);
    }
});

/**
 * Send post request to compare values
 * @method [getCredentials]
 * @async
 * @returns {object} credentials for the user
 */
export const getCredentials = createAsyncThunk("user/getCredentials", async (user) => {
    try {
        console.log("[serviceUser][getCredentials] Request to get credentials was sended")
        const response = await post(PATH_ROUTES.login, user);
        return response.data;
    } catch (e) {
        console.log("[serviceUser][getCredentials] Error trying to get credentials", e);
        throw new Error(e);
    }
});

/**
 * slice contain logic for the user store
 */
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getFromLocalStorage: (state, action) => {
            if(action.payload) {
               state.user = action.payload;
            }
        } 
    },
    extraReducers(builder) {
        builder
            .addCase(postUserCreate.rejected, (state, action) => {
                throw new Error(action.error.message);
            })
            .addCase(getCredentials.fulfilled, (state, action) => {
                window.localStorage.setItem("userLogged", JSON.stringify(action.payload));
            })
            .addCase(getCredentials.rejected, (state, action) => {
                throw new Error(action.error.message);
            })
    }
});

export const { getFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;
export const getUser = (state) => state.user;