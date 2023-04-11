import Head from "next/head";
import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";

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
