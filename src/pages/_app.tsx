import Layout from "@/components/layout";
import RelayEnvironment from "@/relay/RelayEnvironment";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RelayEnvironment>
  );
}
