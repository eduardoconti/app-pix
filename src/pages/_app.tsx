import Layout from "@/components/layout";
import { ErrorBoundary } from "react-error-boundary";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { getInitialPreloadedQuery, getRelayProps } from "relay-nextjs/app";
import { getClientEnvironment } from "@/relay/environment";
import { RelayEnvironmentProvider } from "react-relay";
import { AuthProvider } from "@/context/auth-context";

const clientEnv = getClientEnvironment();
const initialPreloadedQuery = getInitialPreloadedQuery({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  createClientEnvironment: () => clientEnv!,
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const theme = useTheme();
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const env = relayProps.preloadedQuery?.environment ?? clientEnv!;

  return (
    <ErrorBoundary
      fallback={
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: `${theme.palette.background}`,
          }}
        >
          <Typography variant="h1">Oops, ocorreu um erro!</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.reload()}
          >
            Tentar novamente
          </Button>
        </Box>
      }
    >
      <RelayEnvironmentProvider environment={env}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} {...relayProps} />
          </Layout>
        </AuthProvider>
      </RelayEnvironmentProvider>
    </ErrorBoundary>
  );
}
