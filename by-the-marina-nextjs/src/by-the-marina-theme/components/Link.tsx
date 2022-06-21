import * as React from "react";
import MuiLink from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";

type LinkProps = {
  color: string;
  to: string;
  children: string;
};

const Link = React.forwardRef(function Link({ ...props }: LinkProps) {
  return <MuiLink component={GatsbyLink} {...props} />;
});

export default Link;
