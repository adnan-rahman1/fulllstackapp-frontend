import {
  Grid,
  Box,
  alpha,
  Typography,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import heroImg from "../../../public/assets/hero.jpg";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          [theme.breakpoints.down("md")]: {
            paddingBottom: "8px",
          },
          minHeight: "calc(100vh - 64px)",
          backgroundImage: `url(${heroImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            item
            xs={11}
            sm={8}
            md={8}
            lg={5}
            sx={{
              background: alpha("#000", 0.15),
              padding: "24px",
              backdropFilter: "blur(1.5px)",
              borderRadius: "5px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                [theme.breakpoints.down("md")]: {
                  fontSize: "36px",
                  marginTop: "48px",
                },
                color: "#fafafa",
                marginBottom: "24px",
              }}
            >
              Successfully achieve your business goals with a leading software
              development agency.
            </Typography>
            <Divider sx={{ background: "#fafafa" }} />
            <Typography
              style={{
                color: "#fafafa",
                fontSize: "16px",
                marginBottom: "16px",
                marginTop: "24px",
              }}
            >
              Grow your business, save time, and create beautiful custom
              software that delivers outstanding results.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{
                fontSize: "18px",
                marginBottom: "16px",
                textTransform: "none",
              }}
              size="large"
            >
              Hire us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default HeroSection;
