import { Box, Checkbox, IconButton, TextField, Tooltip } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
import { deleteTodo, editTodo, toggleTodo } from "./todoSlice";
import ClickAwayListener from "@mui/base/ClickAwayListener";

export default function TodoItem({ todo: { text, id, completed } }) {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = () => {
    setChecked(!checked);
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (text) => {
    dispatch(editTodo({ id, text }));
  };

  const setEditingFalse = () => {
    setIsEditing(false);
  };

  const handleClickAway = () => {
    formRef.current.requestSubmit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.editTodoInput.value;
    if (!text.length) {
      const res = window.confirm("Do you want to delete this task?");
      res ? handleDelete() : setEditingFalse();
    } else {
      handleEdit(text);
    }
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          autoComplete="off"
          style={{ display: "flex", alignItems: "center" }}
        >
          <TextField
            id="editTodoInput"
            name="editTodoInput"
            variant="standard"
            defaultValue={text}
            fullWidth
          />
          <Tooltip title="Submit">
            <IconButton type="submit" aria-label="submit">
              <CheckBoxIcon color="success" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Cancel">
            <IconButton aria-label="cancel" onClick={setEditingFalse}>
              <CancelIcon color="error" />
            </IconButton>
          </Tooltip>
        </form>
      </ClickAwayListener>
    );
  }

  return (
    <Box marginY={1} sx={{ display: "flex", alignItems: "center" }}>
      <Tooltip title={completed ? "Mark Incomplete" : "Mark as Done"}>
        <label>
          <Checkbox
            checked={completed}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </label>
      </Tooltip>
      <p
        style={{
          flexGrow: "1",
          margin: 0,
          textDecoration: completed ? "line-through" : "none",
        }}
        onDoubleClick={() => setIsEditing(true)}
      >
        {text}
      </p>
      <Tooltip title="Delete">
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
