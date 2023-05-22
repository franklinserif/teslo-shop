import NextLink from "next/link";
import { ShopLayout } from "@/components/layouts";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { CartList, OrderSummary } from "@/components/cart";

const SummaryPage = () => {
  return (
    <ShopLayout title="Order summary" pageDescription="Order summary details">
      <Typography variant="h1" component="h1">
        Order Summary
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Summary (3 products)</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Delivery address</Typography>
                <NextLink href="/checkout/address">
                  <Link component="span">Edit</Link>
                </NextLink>
              </Box>

              <Typography>Franklin Rodriguez</Typography>
              <Typography>333 Algun lugar</Typography>
              <Typography>Stittsvile, HYA 235</Typography>
              <Typography>Canada</Typography>
              <Typography>+1 234234 2432</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <NextLink href="/checkout/cart">
                  <Link component="span">Edit</Link>
                </NextLink>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirm order
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
