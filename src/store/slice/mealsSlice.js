import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	meals: 0,
};

const mealsSlice = createSlice({
	name: "meals",
	initialState,
	reducers: {
		add(state, { payload }) {
			state.meals += +payload;
		},
	},
});

export const { add } = mealsSlice.actions;
export default mealsSlice.reducer;
