import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import themeReducer from "../features/theme/themeSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});
