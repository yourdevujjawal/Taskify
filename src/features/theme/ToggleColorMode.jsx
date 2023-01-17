import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "./themeSlice";

export default function ToggleColorMode() {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);

  const toggleColorMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box margin="10px" sx={{ display: "flex", justifyContent: "flex-end" }}>
      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}
