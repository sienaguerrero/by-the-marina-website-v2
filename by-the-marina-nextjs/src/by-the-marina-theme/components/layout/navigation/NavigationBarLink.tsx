import React from "react";

import { Box, Typography } from "@mui/material";

import Link from "../../Link";

type NavigationBarLinkType = {
  linkText: string;
  linkTo: string;
  download?: boolean;
};

function NavigationBarLink(props: NavigationBarLinkType) {
  const { linkText, linkTo, download } = props;
  return (
    <Box p={0.5}>
      <Typography variant="button">
        <Link
          to={linkTo}
          color="primary"
          {...(download && { download, target: "_blank" })}
        >
          {linkText}
        </Link>
      </Typography>
    </Box>
  );
}

export default NavigationBarLink;
