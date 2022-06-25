import type { AppProps } from "next/app";
import Layout from "../src/by-the-marina-theme/components/layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}> </Component>{" "}
    </Layout>
  );
}
