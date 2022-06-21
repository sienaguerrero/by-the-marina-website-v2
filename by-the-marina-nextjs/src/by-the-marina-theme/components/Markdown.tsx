import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from "markdown-to-jsx";

import Typography from "@mui/material/Typography";
import { Link as MuiLink } from "@mui/material";
import Box from "@mui/material/Box";

function MarkdownListItem(props) {
  return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        component: "h1",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6", component: "h2" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: MuiLink },
    li: {
      component: MarkdownListItem,
    },
  },
};

type MarkdownProps = { children: any; filePath: string };
export default function Markdown(props: MarkdownProps) {
  const { children } = props;

  return <ReactMarkdown options={options}>{children}</ReactMarkdown>;
}
