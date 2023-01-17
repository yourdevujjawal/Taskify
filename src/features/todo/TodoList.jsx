import { Box, Collapse, Stack } from "@mui/material";
import TodoItem from "./TodoItem";
import { TransitionGroup } from "react-transition-group";

export default function TodoList({ todos }) {
  return (
    <Box component="section">
      <Stack>
        <TransitionGroup>
          {todos.map((todo) => (
            <Collapse key={todo.id}>
              <TodoItem todo={todo} />
            </Collapse>
          ))}
        </TransitionGroup>
      </Stack>
    </Box>
  );
}
