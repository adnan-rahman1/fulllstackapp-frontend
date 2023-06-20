import CompanyOfferSection from "@/components/home/CompanyOfferSection";
import HeroSection from "@/components/home/HeroSection";
import MethodologySection from "@/components/home/MethodologySection";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";

import { Grid } from "@mui/material";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ mt: 1 }}
    >
      <HeroSection />
      <MethodologySection />
      <SpecialtiesSection />
      <CompanyOfferSection />
    </Grid>
  );
};

HomePage.displayName = "FullStackApp | Home";

export default HomePage;
