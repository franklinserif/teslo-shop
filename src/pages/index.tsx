import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";
import { initialData } from "@/database/products";
import { ProductList } from "@/components/products";

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

      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
}
