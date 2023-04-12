import Head from 'next/head';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import React, { Suspense } from 'react';

import dynamic from 'next/dynamic';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

const DataGrid = dynamic(() => import('@/components/charge-data-grid'), {
  ssr: false,
});

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Charges</title>
      </Head>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" sx={{ marginBottom: theme.spacing(1) }}>
          Charges
        </Typography>
        <Suspense fallback={<CircularProgress />}>
          <DataGrid />
        </Suspense>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['nextauth.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
