import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { graphql, loadQuery, usePreloadedQuery } from "react-relay";
import { environment } from "@/relay/environment";
import { Chip, Theme, useTheme } from "@mui/material";

const ChipStatus = ({
  value,
}: {
  value: "PAYED" | "ACTIVE" | "FAILED" | "PENDING";
}) => {
  const theme = useTheme();
  return (
    <Chip
      label={value}
      sx={{ backgroundColor: retrievChipColor(value, theme) }}
    ></Chip>
  );
};
const retrievChipColor = (
  status: "PAYED" | "ACTIVE" | "FAILED" | "PENDING",
  theme: Theme
) => {
  const colorType = theme.palette.mode === "dark" ? "dark" : "light";
  if (status === "PAYED") {
    return theme.palette.primary[`${colorType}`];
  }
  if (status === "ACTIVE" || status === "PENDING") {
    return theme.palette.warning[`${colorType}`];
  }

  if (status === "FAILED") {
    return theme.palette.error[`${colorType}`];
  }

  return "default";
};
const columns: GridColDef[] = [
  { field: "created_at", headerName: "CreatedAt", flex: 1 },
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "provider",
    headerName: "Provider",
    flex: 1,
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
    renderCell: ({ formattedValue }) => {
      return <ChipStatus value={formattedValue} />;
    },
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
