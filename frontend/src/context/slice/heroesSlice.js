import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, post, remove, update } from "../../libs/axios";
import { PATH_ROUTES } from "../../constants/consts";

/**
 * inital state for heroes store
 * @constant
 * @type {Array}
 */
const initialState = {
    heroes: [],
    filteredHeroes: [],
};

/**
 * @method
 * @async
 * @return {Array} All heroes
 */
export const fetchHeroes = createAsyncThunk("heroes/fetchHeroes", async () => {
    try {
        console.log("[heroeSlice][fetchHeroes] Request sended to axios");
        const response = await get(PATH_ROUTES.heroes);
        return response.data;
    } catch (e) {
        console.error("[heroeSlice][fetchHeroes] An error was occured trying to send request");
        throw new Error(e);
    }
});

/**
 * send request to create a new hero
 * @method
 * @async
 * @return {object} response from the post request
 */
export const fetchPostHeroes = createAsyncThunk("heroes/fetchPostHeroes", async (data) => {
    try {
        console.log("[heroeSlice][fetchPostHeroes] Post request sended to axios with this values");
        const response = await post(PATH_ROUTES.heroes, data.body, data.token);
        return response.data;
    } catch (e) {
        console.error("[heroeSlice][fetchPostHeroes] An error was occured trying to send post request", e);
        throw new Error(e)
    }
});

/**
 * send reqeust to delete a hero
 * @method
 * @async
 * @return {object} response from delete request
 */
export const deleteHero = createAsyncThunk("heroes/deleteHero", async ( data ) => {
    try {
        console.log("[heroeSlice][deleteHeroe] Remove request sended to axios with this id", data.id);
        const response = await remove(PATH_ROUTES.heroById + data.id, data.token);
        return response.data;
    } catch (e) {
        console.error("[heroeSlice][deleteHeroe] An error was occured trying to send remove request");
        throw new Error(e);
    }
});

/**
 * send request to update a hero
 * @method
 * @async
 * @return {obejct} response from update request
 */
export const updateHero = createAsyncThunk("heroes/updateHero", async ( data ) => {
    try {
        console.log("[heroeSlice][updateHeroe] update request sended to axios with this id", data.body._id);
        const response = await update(PATH_ROUTES.heroById + data.body._id, data.body, data.token);
        return response.data;
    } catch (e) {
        console.erro("[heroeSlice][updateHeroe] An error was occured trying to send update request");
        throw new Error(e);
    } 
})

/**
 * contain all the logic of the heroes store
 */
const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {
        searchByName: (state, action) => {
            const filteredHeroes = state.filteredHeroes.filter((hero) => 
                hero.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
                ...state,
                filteredHeroes: action.payload.length > 0 ? filteredHeroes : [...state.heroes] 
            };
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroes = state.heroes.concat(action.payload);
                state.filteredHeroes = state.filteredHeroes.concat(action.payload);
            })
            .addCase(fetchHeroes.rejected, (state, action) => {
                throw new Error(action.error.message);
            })
            .addCase(fetchPostHeroes.fulfilled, (state, action) => {
                state.heroes = state.heroes.push(action.payload);
                state.filteredHeroes = state.filteredHeroes.push(action.payload);
            })
            .addCase(fetchPostHeroes.rejected, (state, action) => {
                throw new Error(action.error.message);
            })
            .addCase(updateHero.fulfilled, (state, action) => {
                const index = state.heroes.findIndex((item) => item._id === action.payload._id);
                state.heroes[index] = {
                    ...state[index],
                    ...action.payload
                };
            })
            .addCase(updateHero.rejected, (state, action) => {
                throw new Error(action.error.message);
            })
            .addCase(deleteHero.fulfilled, (state, action) => {
                const index = state.heroes.findIndex((item) => item._id === action.payload._id)
                state.heroes.splice(index, 1);
                state.filteredHeroes.splice(index, 1);
            })
            .addCase(deleteHero.rejected, (state, action) => {
                throw new Error(action.error.message);
            })
    }
});

export const { searchByName } = heroesSlice.actions;
// slice to the store
export default heroesSlice.reducer;

/**
 * @method
 * @param {Array} state all heroes
 * @returns {[Array | object]} filtered heroes
 */
export const filterHeroes = (state) => state.heroes.filteredHeroes;

/**
 * @method
 * @param {Array} state  all heroes
 * @returns {Array} return all heroes
 */
export const selectAllHeroes = (state) => state.heroes.heroes;

/**
 * find hero by id
 * @method
 * @param {Array} state 
 * @param {string} heroId 
 * @returns {[object | undefined]} one hero or undefined  
 */
export const selectHeroesById = (state, heroId) => 
    state.heroes.heroes.find((hero) => hero._id === heroId);