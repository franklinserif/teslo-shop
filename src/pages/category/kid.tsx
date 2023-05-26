import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";
import { useProducts } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";
import { ProductList } from "@/components/products";

export default function KidPage() {
  const { products, isLoading } = useProducts("/products?gender=kid");

  return (
    <ShopLayout
      title="Teslo shop - kid"
      pageDescription="Find the best product for kid of Teslo here"
      imageFullUrl={""}
    >
      <Typography variant="h1" component="h1">
        Kids
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Products for kids
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}
