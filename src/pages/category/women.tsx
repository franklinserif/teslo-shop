import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";
import { useProducts } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";
import { ProductList } from "@/components/products";

export default function WomenPage() {
  const { products, isLoading } = useProducts("/products?gender=women");

  return (
    <ShopLayout
      title="Teslo shop - women"
      pageDescription="Find the best product for women of Teslo here"
      imageFullUrl={""}
    >
      <Typography variant="h1" component="h1">
        Women
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Products for women
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}
