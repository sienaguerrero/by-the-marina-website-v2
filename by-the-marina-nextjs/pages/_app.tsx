import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";

import type { AppProps } from "next/app";
import Layout from "../src/by-the-marina-theme/components/layout/Layout";
import {
  ColorModeContext,
  useAppTheme,
} from "../src/by-the-marina-theme/hooks/useAppTheme";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { appTheme, colorMode } = useAppTheme();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1 initial-scale=1, width=device-width"
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
      </Head>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={appTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
