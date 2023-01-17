import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function AddTodo() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.todoInput.value;
    if (!text) {
      inputRef.current.focus();
      return;
    } else {
      dispatch(addTodo(text));
      inputRef.current.value = "";
    }
    inputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{ margin: "30px auto" }}
    >
      <Box sx={{ display: "flex" }}>
        <TextField
          id="todoInput"
          label="Enter title"
          variant="outlined"
          inputRef={inputRef}
          name="todoInput"
          fullWidth
          sx={{ marginRight: "10px" }}
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </Box>
    </form>
  );
}
