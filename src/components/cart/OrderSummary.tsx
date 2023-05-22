import { Box, Divider, Grid, Typography } from "@mui/material";

export const OrderSummary = () => {
  return (
    <Box>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography>N. Product</Typography>
        </Grid>
        <Grid item>
          <Typography>3 Items</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography>Subtotal</Typography>
        </Grid>

        <Grid item>
          <Typography>${`${143.23}`}</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography>Tax (15)</Typography>
        </Grid>
        <Grid item>
          <Typography>${`${143.23}`}</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        sx={{ mt: 2 }}
      >
        <Grid item>
          <Typography variant="subtitle1">Total</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">${`${243.23}`}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
