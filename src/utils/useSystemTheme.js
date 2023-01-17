import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { selectTheme, setTheme } from "../features/theme/themeSlice";
import { createTheme } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode: mode,
    primary: deepOrange,
  },
});

export const useSystemTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const systemTheme = prefersDarkMode ? "dark" : "light";
  const mode = useSelector(selectTheme);
  const dispatch = useDispatch();
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    dispatch(setTheme(systemTheme));
    return () => {};
  }, [dispatch, systemTheme]);

  return theme;
};
