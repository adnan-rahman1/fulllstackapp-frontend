import {
  Container,
  Toolbar,
  Button,
  useTheme,
  Box,
  Divider,
  ButtonGroup,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"))

  const NavItemClass = {
    pl: 2,
    pr: 2,
    color: "#fff",
    ":hover": {
      background: "inherit",
      color: theme.palette.primary.main,
    },
  };

  return (
    <Toolbar
      sx={{
        pt: 2,
        pb: 2,
        background: theme.palette.secondary.main,
      }}
    >
      {/* <Image src={logo} alt="fullstackapp" width={124} /> */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            [theme.breakpoints.down("md")]: {
              margin: "auto",
            },
          }}
        >
            <Button
              size="large"
              sx={NavItemClass}
              component={Link}
              href="/"
              variant="text"
            >
              Home
            </Button>
            <Button
              size="large"
              sx={NavItemClass}
              component={Link}
              href="/blog"
              variant="text"
            >
              Blog
            </Button>
            <Button
              size="large"
              sx={NavItemClass}
              component={Link}
              href="/about"
              variant="text"
            >
              About
            </Button>
        </Box>

        {isXsScreen ? <Divider sx={{ width: "320px", margin: "auto", mt: 1, mb: 1, background: theme.palette.primary.light }} /> : null}

        <Box
          sx={{
            [theme.breakpoints.down("md")]: {
              margin: "auto",
            },
          }}
        >
          <Button sx={NavItemClass} size="large" variant="text" color="inherit">
            Copyright &copy; 2023, All Rights Reserved.
          </Button>
        </Box>
      </Container>
      {/* <Button sx={{ ml: "auto" }} component={Link} href="/dashboard" variant="text" color="inherit">Dashboard</Button> */}
    </Toolbar>
  );
};

export default Footer;
