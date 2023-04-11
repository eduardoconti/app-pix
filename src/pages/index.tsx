import Head from "next/head";
import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

const DataGrid = dynamic(() => import("@/components/charge-data-grid"), {
  ssr: false,
});

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3" sx={{ marginBottom: theme.spacing(1) }}>
          Dashboard
        </Typography>
        <Suspense fallback={<CircularProgress />}>
          <DataGrid />
        </Suspense>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //const apiClient = getAPIClient(ctx);
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  //await apiClient.get('/users')

  return {
    props: {},
  };
};
