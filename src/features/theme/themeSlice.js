import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state, action) => {
      const nextMode = state.mode === "dark" ? "light" : "dark";
      return {
        mode: nextMode,
      };
    },
    setTheme: (state, action) => {
      return {
        mode: action.payload,
      };
    },
  },
});
export const { toggleTheme, setTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme.mode;
export default themeSlice.reducer;
