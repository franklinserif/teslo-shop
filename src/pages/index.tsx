import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <ShopLayout
      title="Teslo shop - Home"
      pageDescription="Find the best product of Teslo here"
      imageFullUrl={""}
    >
      <Typography variant="h1" component="h1">
        Market
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All products
      </Typography>
    </ShopLayout>
  );
}
