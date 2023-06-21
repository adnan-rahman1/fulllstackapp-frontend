"use client"; // This is a client component

import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  Button,
  Container,
  IconButton,
  alpha,
  useMediaQuery,
  useTheme,
  Toolbar,
  AppBar,
} from "@mui/material";

import Image from "next/image";

import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { MenuRounded } from "@mui/icons-material";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const LaptopNav = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const [isDrawerOpen, setOpenDrawer] = React.useState(false);

  const activeListItemClass = {
    color: `${theme.palette.primary.main} !important`,
  };

  const NavItemClass = {
    mr: 2,
    ":hover": {
      background: "inherit",
      color: theme.palette.primary.main,
    },
  };

  React.useEffect(() => {
    setOpenDrawer(false);
  }, [setOpenDrawer]);

  return (
    <>
      <ElevationScroll>
        <AppBar
          sx={{
            background: alpha("#fff", 0.3),
            backdropFilter: "blur(5px)",
          }}
        >
          <Container sx={{ padding: "4px" }}>
            <Toolbar>
              <Image src={logo} alt="fullstackapp" width={124} />
              {md ? (
                <IconButton
                  sx={{ ml: "auto" }}
                  size="large"
                  color="primary"
                  onClick={() => setOpenDrawer(true)}
                >
                  <MenuRounded />
                </IconButton>
              ) : (
                <>
                  <Button
                    size="large"
                    sx={
                      router.pathname === "/"
                        ? { ...activeListItemClass, ...NavItemClass }
                        : { ...NavItemClass }
                    }
                    style={{ marginLeft: "auto" }}
                    component={Link}
                    href="/"
                    variant="text"
                    color="inherit"
                  >
                    Home
                  </Button>
                  {/* <Button
                    size="large"
                    sx={
                      router.pathname === "/blog"
                        ? { ...activeListItemClass, ...NavItemClass }
                        : { ...NavItemClass }
                    }
                    component={Link}
                    href="/blog"
                    variant="text"
                    color="inherit"
                  >
                    Blog
                  </Button> */}
                  <Button
                    size="large"
                    sx={
                      router.pathname === "/about"
                        ? { ...activeListItemClass, ...NavItemClass }
                        : { ...NavItemClass }
                    }
                    component={Link}
                    href="/about"
                    variant="text"
                    color="inherit"
                  >
                    About
                  </Button>
                  <Button
                    size="large"
                    sx={{
                      height: "38px",
                      color: "#fafafa",
                      borderRadius: "30px",
                    }}
                    component={Link}
                    href="https://dev-28305733.okta.com/login/login.htm"
                    variant="contained"
                    color="primary"
                  >
                    Sign in
                  </Button>
                </>
              )}
              {/* <Button component={Link} href="/dashboard" variant="text" color="inherit">Dashboard</Button> */}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <MobileNav isDrawerOpen={isDrawerOpen} setOpenDrawer={setOpenDrawer} />
    </>
  );
};
export default LaptopNav;
