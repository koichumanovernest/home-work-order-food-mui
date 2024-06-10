import { configureStore } from "@reduxjs/toolkit";
import mealsSlice from "./slice/mealsSlice";

export const store = configureStore({
	reducer: {
		meals: mealsSlice,
	},
});
