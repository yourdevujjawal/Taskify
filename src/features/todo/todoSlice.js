import { createSlice } from "@reduxjs/toolkit";
import { getRandomId } from "../../utils/getRandomId";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: getRandomId(),
        text: action.payload,
        completed: false,
      };
      return [...state, todo];
    },
    toggleTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    },
    editTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          text: action.payload.text,
        };
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;

// selector function to get all todos from store
export const selectTodos = (state) => state.todos;

export default todoSlice.reducer;
