import { useMediaQuery } from "@mui/material";
import { useAppTheme } from "../hooks/useAppTheme";

function useScreenSize() {
  const { appTheme } = useAppTheme();
  const isMobileView = useMediaQuery(appTheme.breakpoints.down("sm"), {
    noSsr: true,
  });

  return {
    isMobileView,
  };
}

export { useScreenSize };
