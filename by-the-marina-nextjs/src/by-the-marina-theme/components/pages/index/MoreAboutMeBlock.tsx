import React from "react";

import { Box, useTheme } from "@mui/material/";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { black, white } from "../../../../theme";

type ImageHeaderProps = {};

function MoreAboutMeBlock(props: ImageHeaderProps) {
  const {} = props;

  const { isMobileView } = useScreenSize();
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";

  return <></>;
}

export default MoreAboutMeBlock;
