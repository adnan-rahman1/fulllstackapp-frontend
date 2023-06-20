import logo from "../../../public/assets/logo.png";

import {
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  useTheme,
} from "@mui/material";

import Link from "next/link";
import Image from "next/image";
import {
  HomeRounded,
  ArticleRounded,
  PersonRounded,
  LoginRounded,
} from "@mui/icons-material";
import { useRouter } from "next/router";

type MobileNavProps = {
  isDrawerOpen: boolean;
  setOpenDrawer: (isDrawerOpen: boolean) => void;
};

const MobileNav = ({ isDrawerOpen, setOpenDrawer }: MobileNavProps) => {
  const theme = useTheme();
  const router = useRouter();

  const activeListItemClass = {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: "#fff",
  };

  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          width: "70%",
          "&.MuiDrawer-paper": {
            background: theme.palette.background.default,
          },
        },
      }}
      style={{ zIndex: 1202 }}
      open={isDrawerOpen}
      onClose={() => setOpenDrawer(false)}
      onOpen={() => setOpenDrawer(true)}
    >
      <Button
        variant="text"
        component={Link}
        href="/"
        style={{
          textAlign: "center",
          margin: "0 auto",
          width: "100%",
          background: "rgba(47, 46, 65, 0.0)",
        }}
      >
        <Image
          height={40}
          src={logo}
          alt="Full Stack App"
          style={{ marginTop: "16px", marginBottom: "16px" }}
        />
      </Button>

      <List style={{ paddingTop: 0 }}>
        <ListItemButton
          sx={router.pathname === "/" ? { ...activeListItemClass } : null}
          component={Link}
          href="/"
          onClick={() => setOpenDrawer(false)}
          selected={true}
        >
          <ListItemIcon>
            <HomeRounded />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <ListItemButton
          sx={router.pathname === "/blog" ? { ...activeListItemClass } : null}
          component={Link}
          href="/blog"
          onClick={() => setOpenDrawer(false)}
          selected={true}
        >
          <ListItemIcon>
            <ArticleRounded />
          </ListItemIcon>
          <ListItemText>Blog</ListItemText>
        </ListItemButton>
        <ListItemButton
          sx={router.pathname === "/about" ? { ...activeListItemClass } : null}
          component={Link}
          href="/about"
          onClick={() => setOpenDrawer(false)}
          selected={true}
        >
          <ListItemIcon>
            <PersonRounded />
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItemButton>
        <ListItemButton
          component={Link}
          href="https://dev-28305733.okta.com/login/login.htm"
          onClick={() => setOpenDrawer(false)}
          selected={true}
        >
          <ListItemIcon>
            <LoginRounded />
          </ListItemIcon>
          <ListItemText>Sign in</ListItemText>
        </ListItemButton>
      </List>
    </SwipeableDrawer>
  );
};

export default MobileNav;
