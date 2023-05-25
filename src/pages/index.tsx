import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";
import { FullScreenLoading } from "@/components/ui";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";

export default function Home() {
  const { products, isLoading } = useProducts("/products");
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

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}
