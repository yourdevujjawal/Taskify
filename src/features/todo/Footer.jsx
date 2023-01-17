import { Box, Typography, useTheme } from "@mui/material";
// import { purple } from "@mui/material/colors";

export default function Footer({ todos }) {
  const leftTodos = todos.filter((todo) => todo.completed !== true);
  const theme = useTheme();
  return (
    <footer style={{ marginTop: "20px" }}>
      <Box bgcolor={theme.palette.background.default} padding={1}>
        <Typography variant="overline">
          {leftTodos.length} task{leftTodos.length > 1 ? "s" : ""} left to do.
        </Typography>
      </Box>
    </footer>
  );
}
