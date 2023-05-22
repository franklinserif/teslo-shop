import { Box, Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";

const custom404 = () => {
  return (
    <ShopLayout
      title={"Teslo shop - Page not found"}
      pageDescription={"there is nothing here"}
    >
      <Box
        display="flex"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          {"We didn't find any page here..."}
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default custom404;
