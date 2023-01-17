import Todos from "./features/todo/Todos";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useSystemTheme } from "./utils/useSystemTheme";
import ToggleColorMode from "./features/theme/ToggleColorMode";
import "./App.css";

export default function App() {
  const theme = useSystemTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToggleColorMode />
      <Todos />
    </ThemeProvider>
  );
}
