import Head from "next/head";
import { Box, Typography, useTheme } from "@mui/material";
import DataGridDemo from "@/components/charge-data-grid";
import { Suspense } from "react";

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

        <DataGridDemo />
      </Box>
    </>
  );
}
