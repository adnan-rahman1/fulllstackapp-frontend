import Layout from "@/components/layout";
import LaptopNav from "@/components/navbar/LaptopNav";
import { AppProps } from "next/app";
import Head from "next/head";

import "../components/css/global.css";
import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import customTheme from "@/components/config/Theme";
import Footer from "@/components/footer";

const MainApp = ({ Component, pageProps }: AppProps) => {
  const theme = useTheme();

  return (
    <Layout>
      <Head>
        <title>{Component.displayName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>

      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <LaptopNav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Layout>
  );
};

export default MainApp;
