import Layout from "@/components/layout";
import "@/styles/globals.css";
import { CssBaseline } from '@mui/material';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CssBaseline>
  );
}
