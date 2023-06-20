import styled from "@emotion/styled";
import {
  Grid,
  Typography,
  CardHeader,
  Fade,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";

import desktop from "../../../public/assets/desktop.svg";
import tablet from "../../../public/assets/tablet.svg";
import smartphone from "../../../public/assets/smartphone.svg";
import SectionTitle from "./SectionTitle";

const dummyData = [
  {
    title: "Software Development",
    description:
      "We use deep domain knowledge with advanced technologies to build software that accelerates your business.",
  },
  {
    title: "Web Development",
    description:
      "With the help of the latest technologies, we develop enterprise-class applications that is secure, robust, and scalable.",
  },
  {
    title: "Mobile Development",
    description:
      "Using modern libraries and frameworks, we develop and deploy high-performing iOS and Android applications",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  ":hover": {
    boxShadow:
      "0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)",
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CompanyOfferSection = () => {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index: number) => {
    setIndex(index);
  };
  return (
    <>
      <SectionTitle
        title="See what we offer"
        subTitle="We offer different types of development based on our expertise."
      />
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={10}
        lg={10}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 8 }}
      >
        <Grid item xs={12} sm={10} md={5} lg={4}>
          <AutoPlaySwipeableViews
            interval={5000}
            index={index}
            onChangeIndex={handleChangeIndex}
          >
            {dummyData.map((data) => (
              <StyledCard
                key={data.title}
                variant="elevation"
                elevation={3}
                style={{ margin: "24px" }}
              >
                <CardHeader
                  title={
                    <Typography variant="h6" style={{ fontWeight: 500 }}>
                      {data.title}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography>{data.description}</Typography>
                </CardContent>
              </StyledCard>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>
        <Grid
          item
          xs={11}
          sm={11}
          md={4}
          lg={4}
          style={{ textAlign: "center" }}
        >
          {index == 0 && (
            <Fade in={true} timeout={1000}>
              <Image
                alt="desktop"
                src={desktop}
                height={360}
                width={340}
                style={{
                  filter: "drop-shadow(-8px 10px 10px rgba(0, 0, 0, .4))",
                }}
              />
            </Fade>
          )}
          {index == 1 && (
            <Fade in={true} timeout={1000}>
              <Image
                alt="tablet"
                src={tablet}
                height={360}
                style={{
                  filter: "drop-shadow(-8px 10px 10px rgba(0, 0, 0, .4))",
                }}
              />
            </Fade>
          )}
          {index == 2 && (
            <Fade in={true} timeout={1000}>
              <Image
                alt="smartphone"
                src={smartphone}
                height={360}
                style={{
                  filter: "drop-shadow(-8px 10px 10px rgba(0, 0, 0, .4))",
                }}
              />
            </Fade>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default CompanyOfferSection;
