import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { graphql, loadQuery, usePreloadedQuery } from "react-relay";
import { environment } from "@/relay/environment";
import { useTheme } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 2 },
  {
    field: "provider",
    headerName: "Provider",
    flex: 2,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
  {
    field: "e2e_id",
    headerName: "E2E",
    flex: 2,
  },
];

const chargeQuery = graphql`
  query chargeDataGridQuery {
    findAll {
      id
      amount
      status
      created_at
      e2e_id
      provider
    }
  }
`;
const chargeQueryReference = loadQuery(environment, chargeQuery, {});

export default function DataGridDemo() {
  const data = usePreloadedQuery<any>(chargeQuery, chargeQueryReference);
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
          border: "none",
          color: theme.palette.text.primary,
        }}
      />
    </Box>
  );
}
