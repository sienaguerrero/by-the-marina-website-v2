import * as React from "react";
import {
  Components,
  createTheme,
  PaletteMode,
  responsiveFontSizes,
  useMediaQuery,
} from "@mui/material";
import { getPaletteDesignTokens } from "../theme";

export const ColorModeContext = React.createContext({
  mode: "light",
  toggleColorMode: () => {},
});

function useAppTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  const colorMode = React.useMemo(() => {
    return {
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    };
  }, [mode]);

  /* Override mui Styles */
  const components: Components = {};

  // Update the theme only if the mode changes
  const appTheme = React.useMemo(() => {
    const theme = createTheme({
      typography: {
        fontFamily: "Roboto",
      },
      components,
      ...getPaletteDesignTokens(mode),
    });
    return responsiveFontSizes(theme);
  }, [mode]);

  return { colorMode, appTheme };
}

export { useAppTheme };
