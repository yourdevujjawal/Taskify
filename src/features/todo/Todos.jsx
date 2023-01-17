import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { selectTodos } from "./todoSlice";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Footer from "./Footer";

export default function Todos() {
  const todos = useSelector(selectTodos);
  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <Container maxWidth="sm" sx={{ marginY: 2 }}>
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        🚀 Taskify 📝
      </Typography>
      <main>
        <section>
          <AddTodo />
        </section>
        {/* Pending todos */}
        <TodoList todos={pendingTodos} />
        {/* Completed todos */}
        {completedTodos.length > 0 && (
          <Typography component="h2" variant="caption" marginTop={1.5}>
            Completed:
          </Typography>
        )}
        <TodoList todos={completedTodos} />
      </main>
      {/* Footer */}
      <Footer todos={todos} />
    </Container>
  );
}
