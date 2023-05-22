import { ShopLayout } from "@/components/layouts";
import { ProductSlideShow } from "@/components/products";
import { ItemCounter, SizeSelector } from "@/components/ui";
import { initialData } from "@/database/products";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";

import "react-slideshow-image/dist/styles.css";

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={""} pageDescription={""}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/** title */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>
          </Box>
          <Box sx={{ my: 2 }} display="flex" alignItems="center">
            <Typography variant="subtitle2">Amount:</Typography>
            <ItemCounter />
          </Box>
          <Box sx={{ my: 2 }} display="flex" alignItems="center">
            <Typography variant="subtitle2">
              {/** item counter */} Sizes:
            </Typography>

            <SizeSelector
              sizes={product.sizes}
              selectedSize={product.sizes[0]}
            />
          </Box>
          <Button color="secondary" className="circular-btn" fullWidth>
            Agregar al carrito
          </Button>

          {/*  <Chip label="Not available" color="error" variant="outlined" fullWidth/> */}

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1">Description:</Typography>
            <Typography variant="body2">{product.description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;
