import NextLink from "next/link";
import { ShopLayout } from "@/components/layouts";
import { Chip, Grid, Typography, Link } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Full name", width: 300, sortable: false },
  {
    field: "paid",
    headerName: "Paid",
    description: "Show information if the order is paid or not",
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Paid" variant="outlined" />
      ) : (
        <Chip color="error" label="Unpaid" variant="outlined" />
      );
    },
  },
  {
    field: "showOrder",
    headerName: "Show order",
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <NextLink
          href={`/orders/${params.id}`}
          style={{ textDecoration: "none" }}
        >
          <Link component="span" color="secondary">
            Order details
          </Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, fullname: "Franklin Rodriguez", paid: true },
  { id: 2, fullname: "Melissa Flores", paid: false },
  { id: 3, fullname: "Fernando Allejo", paid: false },
  { id: 4, fullname: "Emin Reyes", paid: true },
  { id: 5, fullname: "Fernando Herrera", paid: false },
];

const HistoryPage = () => (
  <ShopLayout title="Order history" pageDescription="User order history">
    <Typography variant="h1" component="h1">
      Order history
    </Typography>
    <Grid container>
      <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[10, 20, 25]}
          rowSelection={false}
        ></DataGrid>
      </Grid>
    </Grid>
  </ShopLayout>
);

export default HistoryPage;
