import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { loadQuery, usePreloadedQuery } from 'react-relay';
import { getClientEnvironment } from '@/relay/environment';
import { Typography, useTheme } from '@mui/material';
import { webhookQuery } from '@/queries/webhook.query';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import Surface from '@/components/surface';
import { webhookDataGridQuery } from '@/queries/__generated__/webhookDataGridQuery.graphql';
const clientEnv = getClientEnvironment();

const columns: GridColDef[] = [
  {
    field: 'created_at',
    headerName: 'Created',
    flex: 1,
    renderCell: ({ formattedValue }) => {
      const formato = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      return (
        <Typography variant="subtitle2">
          {formato.format(new Date(formattedValue as string)).replace(',', ' ')}
        </Typography>
      );
    },
  },
  {
    field: 'delivered_at',
    headerName: 'Delivered',
    flex: 1,
    renderCell: ({ formattedValue }) => {
      const formato = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      return (
        <Typography variant="subtitle2">
          {formato.format(new Date(formattedValue as string)).replace(',', ' ')}
        </Typography>
      );
    },
  },
  { field: 'id', headerName: 'Webhook id', flex: 2 },
  {
    field: 'type',
    headerName: 'Type',
    flex: 1,
  },
  {
    field: 'attempts',
    headerName: 'Attempts',
    flex: 2,
  },
];

const webhookQueryReference = loadQuery<webhookDataGridQuery>(
  clientEnv as RelayModernEnvironment,
  webhookQuery,
  {},
);
export default function DataGridWebhook() {
  const data = usePreloadedQuery(webhookQuery, webhookQueryReference);
  const theme = useTheme();

  return (
    <Surface>
      <DataGrid
        density="compact"
        rows={data?.findAllUserWeboohok}
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
          height: 400,
        }}
      />
    </Surface>
  );
}
