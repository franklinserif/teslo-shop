import { Box, CircularProgress, Typography } from "@mui/material";

export const FullScreenLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="calc(100vh - 200px)"
    >
      <Typography sx={{ mb: 3 }} variant="h2" fontWeight={200}>
        Loading...
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
