import { colors, PaletteMode } from "@mui/material";

// additional colors
export const black = "#1E1E1E";
export const granite = "#565656";
export const aluminum = "#999999";
export const lightGray = "#EDEDED";
export const alabaster = "#FAFAFA";
export const white = "#FFFFFF";
export const whiteTransparent = "#FFFFFF00";

export const getPaletteDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            light: "#96dbdb",
            main: "#5aafaf",
            dark: "#0b4656",
          },
          secondary: {
            main: "#fff0aa",
          },
          error: {
            main: colors.red.A400,
          },
          background: {
            default: `#ccebeb`,
          },
        }
      : {
          primary: {
            main: "#fff0aa",
          },
          secondary: {
            main: "#96dbdb",
          },
          error: {
            main: colors.red.A400,
          },
        }),
  },
});
