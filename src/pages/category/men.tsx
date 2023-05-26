import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";
import { useProducts } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";
import { ProductList } from "@/components/products";

export default function MenPage() {
  const { products, isLoading } = useProducts("/products?gender=men");

  return (
    <ShopLayout
      title="Teslo shop - men"
      pageDescription="Find the best product for men of Teslo here"
      imageFullUrl={""}
    >
      <Typography variant="h1" component="h1">
        Men
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Products for men
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}
