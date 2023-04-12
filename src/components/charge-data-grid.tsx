import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { loadQuery, usePreloadedQuery } from 'react-relay';
import { getClientEnvironment } from '@/relay/environment';
import { Chip, Theme, Typography, useTheme } from '@mui/material';
import { chargeQuery } from '@/queries/charge.query';
import { chargeDataGridQuery } from '@/queries/__generated__/chargeDataGridQuery.graphql';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import { amountBrl } from '@/services/utils/amount';
const clientEnv = getClientEnvironment();
const ChipStatus = ({
  value,
}: {
  value: 'PAYED' | 'ACTIVE' | 'FAILED' | 'PENDING';
}) => {
  const theme = useTheme();
  return (
    <Chip
      label={value}
      sx={{
        backgroundColor: retrievChipColor(value, theme),
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
      }}
    />
  );
};
const retrievChipColor = (
  status: 'PAYED' | 'ACTIVE' | 'FAILED' | 'PENDING',
  theme: Theme,
) => {
  const colorType = theme.palette.mode === 'dark' ? 'dark' : 'light';
  if (status === 'PAYED') {
    return theme.palette.primary[`${colorType}`];
  }
  if (status === 'ACTIVE' || status === 'PENDING') {
    return theme.palette.warning[`${colorType}`];
  }

  if (status === 'FAILED') {
    return theme.palette.error[`${colorType}`];
  }

  return 'default';
};
const columns: GridColDef[] = [
  {
    field: 'created_at',
    headerName: 'Created',
    flex: 1,
    renderCell: ({ formattedValue }) => {
      return (
        <Typography variant="subtitle2">
          {new Date(formattedValue as string).toLocaleString()}
        </Typography>
      );
    },
  },
  { field: 'id', headerName: 'Charge Id', flex: 2 },
  {
    field: 'provider',
    headerName: 'Provider',
    flex: 1,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 1,
    renderCell: ({ formattedValue }) => {
      return (
        <Typography variant="subtitle2">{amountBrl(formattedValue)}</Typography>
      );
    },
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: ({ formattedValue }) => {
      return <ChipStatus value={formattedValue} />;
    },
  },
  {
    field: 'e2e_id',
    headerName: 'Authorization code',
    flex: 2,
  },
];

const chargeQueryReference = loadQuery<chargeDataGridQuery>(
  clientEnv as RelayModernEnvironment,
  chargeQuery,
  {},
);
export default function DataGridCharge() {
  const data = usePreloadedQuery(chargeQuery, chargeQueryReference);
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: 400,
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <DataGrid
        rows={data?.findAll}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          border: 'none',
          color: theme.palette.text.primary,
        }}
      />
    </Box>
  );
}
