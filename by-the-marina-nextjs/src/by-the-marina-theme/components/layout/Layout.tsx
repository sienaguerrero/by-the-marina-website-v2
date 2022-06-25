import React, { ReactNode } from "react";

import { Box } from "@mui/material/";
import TopNavigationBar from "./header/TopNavigationBar";
import Footer from "./footer/Footer";
import ThemeWrapper from "./ThemeWrapper";

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <Box display="flex" flexDirection="column">
      <TopNavigationBar />
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" width="100%" height="100%">
          <Box component="main">{children}</Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
