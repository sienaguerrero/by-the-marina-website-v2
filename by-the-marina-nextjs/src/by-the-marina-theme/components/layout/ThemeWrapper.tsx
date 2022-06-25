import * as React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { ColorModeContext, useAppTheme } from "../../hooks/useAppTheme";
import Layout from "./Layout";

export default function TopLayout(props) {
  const { appTheme, colorMode } = useAppTheme();
  return (
    <React.Fragment>
      <>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Dawning+of+a+New+Day&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Pacifico:300,400,500,700&display=swap"
        />
      </>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={appTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>{props.children}</Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
