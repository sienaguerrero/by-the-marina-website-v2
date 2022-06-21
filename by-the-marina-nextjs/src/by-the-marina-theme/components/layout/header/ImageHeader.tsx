import React from "react";

import { Box, Typography, useTheme } from "@mui/material/";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { black, white } from "../../../../theme";

type ImageHeaderProps = {
  imageSrc: string;
  imageAltTitle: string;
  imageCaption: string;
  imageOverlayText?: string;
};

function ImageHeader(props: ImageHeaderProps) {
  const { imageSrc, imageCaption, imageOverlayText } = props;

  const { isMobileView } = useScreenSize();
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height={isMobileView ? "100px" : "300px"}
        sx={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {!isMobileView && (
          <Typography
            sx={{
              color: white,
              fontFamily: "Dawning of a New Day",
              fontWeight: "bold",
              fontSize: "80px",
              textShadow: `2px 2px ${theme.palette.primary.main}`,
              textAlign: "center",
              ...(!isDarkMode && { color: black }),
            }}
          >
            {imageOverlayText}
          </Typography>
        )}
      </Box>
      <Box mt={0.5} display="flex" justifyContent="flex-end" pr={1}>
        <Typography
          variant="caption"
          color={isDarkMode ? "primary" : theme.palette.primary.dark}
          {...(isMobileView
            ? {
                sx: [
                  !isDarkMode && { background: "rgba(255,255,255,0.5)" },
                  {
                    fontWeight: "bold",
                    textAlign: isMobileView ? "right" : "center",
                  },
                ],
              }
            : {
                sx: [
                  !isDarkMode && { background: "rgba(255,255,255,0.5)" },
                  {
                    fontWeight: "bold",
                  },
                ],
              })}
        >
          {imageCaption}
        </Typography>
      </Box>
    </Box>
  );
}

export default ImageHeader;
