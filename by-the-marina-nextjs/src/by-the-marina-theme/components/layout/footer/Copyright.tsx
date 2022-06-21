import * as React from "react";

import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

import YAMLData from "../../../../content/_config.yaml";

export default function Copyright() {
  return (
    <Typography
      sx={{ paddingY: 1 }}
      variant="body2"
      color="primary"
      align="center"
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://sienaguerrero.com/">
        {YAMLData.title}
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
