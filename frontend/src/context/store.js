import { configureStore } from "@reduxjs/toolkit";

import heroesSlice from "./slice/heroesSlice";
import userSlice from "./slice/userSlice";

/**
 * Redux store for heroes slice and user slice
 */
export const HeroesStore = configureStore({
    reducer: {
        heroes: heroesSlice,
        user: userSlice,
    }
})