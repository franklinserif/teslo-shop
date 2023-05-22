import NextLink from "next/link";
import { ShopLayout } from "@/components/layouts";
import { Box, Link, Typography } from "@mui/material";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import React from "react";

const EmptyPage = () => {
  return (
    <ShopLayout
      title="Shopping cart empty"
      pageDescription="There is not items in the shopping cart"
    >
      <Box
        display="flex"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" alignContent="center">
          <Typography>{"Your cart is empty"}</Typography>
          <NextLink href="/" style={{ textDecoration: "none", marginLeft: 5 }}>
            <Link component="span" color="secondary">
              Go Back
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
