import React from "react";

import { Box, Typography, useTheme } from "@mui/material/";
//import { useScreenSize } from "../../../hooks/useScreenSize";

type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  endNote?: string;
};

function ProjectCard(props: ProjectCardProps) {
  const { projectName, projectDescription, endNote } = props;

  //const { isMobileView } = useScreenSize();
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";
  console.log(isDarkMode);

  return (
    <Box
      sx={{
        p: 1,
        width: "100%",
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: 4,
      }}
    >
      <Typography variant="h4" sx={{ mb: 1 }}>
        {projectName}
      </Typography>
      <Typography display="inline" sx={{ fontWeight: "bold" }}>
        Project Info:{" "}
      </Typography>
      <Typography display="inline">{projectDescription}</Typography>
      {endNote && (
        <Box mt={1}>
          <Typography display="inline" sx={{ fontWeight: "bold" }}>
            {endNote}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ProjectCard;
