import { GetServerSideProps, NextPage } from "next";
import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
import { ProductList } from "@/components/products";
import { getAllProducts, getProductsByTerm } from "@/services";
import { IProduct } from "@/interfaces";

interface Props {
  products: IProduct[];
  foundProduct: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProduct, query }) => {
  return (
    <ShopLayout
      title="Teslo shop - Home"
      pageDescription="Find the best product of Teslo here"
      imageFullUrl={""}
    >
      <Typography variant="h1" component="h1">
        Market
      </Typography>
      {foundProduct ? (
        <Typography variant="h2" sx={{ mb: 1 }}>
          Search term: {query}
        </Typography>
      ) : (
        <Box display="flex" justifyContent="center">
          <Typography variant="h2" sx={{ mb: 1 }}>
            We did not find any product
          </Typography>
          <Typography
            variant="h2"
            sx={{ mb: 1, ml: 1 }}
            color="secondary"
            textTransform="capitalize"
          >
            {query}
          </Typography>
        </Box>
      )}
      <ProductList products={products} />
    </ShopLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  let products = await getProductsByTerm(query);

  const foundProduct = products !== null ? products?.length > 0 : false;

  if (!foundProduct) {
    products = await getAllProducts();
  }

  return {
    props: {
      products,
      foundProduct,
      query,
    },
  };
};

export default SearchPage;
