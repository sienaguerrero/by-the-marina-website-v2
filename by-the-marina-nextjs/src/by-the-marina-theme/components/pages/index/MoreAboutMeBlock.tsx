import React from "react";

import { useTheme } from "@mui/material/";
//import { useScreenSize } from "../../../hooks/useScreenSize";

type ImageHeaderProps = {};

function MoreAboutMeBlock(props: ImageHeaderProps) {
  const {} = props;

  //const { isMobileView } = useScreenSize();
  const theme = useTheme();

  //const isDarkMode = theme.palette.mode === "dark";

  return <></>;
}

export default MoreAboutMeBlock;
