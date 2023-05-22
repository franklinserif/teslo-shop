import NextLink from "next/link";
import { AuthLayout } from "@/components/layouts";
import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material";

const LodingPage = () => {
  return (
    <AuthLayout title="Login">
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h1">
              Signin
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Signin
            </Button>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <NextLink href="/auth/register">
              <Link component="span">You do not have an account?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default LodingPage;
