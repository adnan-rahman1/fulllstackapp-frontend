import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  useTheme,
  alpha,
  Tab,
} from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

import profileImg from "../../../public/assets/profile.png";
import linkedinImg from "../../../public/assets/linkedin.png";
import youtubeImg from "../../../public/assets/youtube.png";
import githubImg from "../../../public/assets/github.png";
import facebookImg from "../../../public/assets/facebook.png";
import artstationImg from "../../../public/assets/artstation.png";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";

import ReactMarkdown from "react-markdown";


const aboutDescription = `
### Intro 
A professional developer and an expert problem solver with expertise in full-stack architecture, design, and development. Experienced in wireframe design, building UI with ReactJS, building backend API or web services using Spring boot framework or any other framework, Git, Jenkins job, docker, Terraform, Websocket, AWS etc. 

Consistency, confidence, and fundamental knowledge are my strengths, which help me to become a good programmer. My goal is to keep doing what I love to do and become an expert on that topic which I learn every single day.

### Specialities
* **Java** - Spring Boot
* **JavaScript** - ReactJS, NextJS, TypeScript
* **Database** - MySQL, PostgreSQL
* **DevOps** - Jenkins, Docker, Amazon Web Service
`

const About: NextPage = () => {
  const theme = useTheme();

  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid
      spacing={3}
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: 1,
        minHeight: "calc(100vh - 146px)",
        background: alpha(theme.palette.primary.light, 0.1),
      }}
    >
      <Grid item xs={12} md={6} lg={5}>
        <Card
          elevation={0}
          sx={{
            mr: 2,
            ml: 2,
            pt: 4,
            pb: 4,
            background: alpha(theme.palette.primary.light, 0.15),
            [theme.breakpoints.down("lg")]: {
              background: "none",
            },
            [theme.breakpoints.down("md")]: {
              pt: 6,
            },
          }}
        >
          <CardHeader
            sx={{ textAlign: "center" }}
            title={
              <Image
                style={{
                  borderRadius: "50%",
                  border: `3px solid ${theme.palette.primary.main}`,
                  marginBottom: "8px",
                }}
                src={profileImg}
                alt="profile"
                height={148}
              />
            }
            subheader={
              <Box>
                <Typography variant="h5" fontWeight={500} color="secondary">
                  Adnan Rahman
                </Typography>
                <Typography variant="subtitle1" fontWeight={500} color="secondary">
                  Full-Stack Software Engineer
                </Typography>
              </Box>
            }
          />
          <Divider
            sx={{
              display: "flex",
              width: "264px",
              margin: "auto",
              background: theme.palette.primary.main,
            }}
          />
          <CardContent
            sx={{ display: "flex", gap: 2, justifyContent: "center" }}
          >
            <a href="https://facebook.com" target="_blank">
              <Image height={32} src={facebookImg} alt="facebook" />
            </a>
            <a href="https://github.com/adnanrahman1" target="_blank">
              <Image height={32} src={githubImg} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/adnanibnamotin"
              target="_blank"
            >
              <Image height={32} src={linkedinImg} alt="linkedin" />
            </a>

            <a href="https://www.youtube.com/" target="_blank">
              <Image height={32} src={youtubeImg} alt="youtube" />
            </a>
            <a href="https://adnanibnamotin.artstation.com/" target="_blank">
              <Image height={32} src={artstationImg} alt="artstation" />
            </a>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", flexWrap: "wrap" }}>
            <Card variant="elevation" sx={{ p: 1, m: 1 }}>
              <CardHeader
                title={
                  <Typography variant="h6" sx={{ color: "#666" }}>Get access to my resume:</Typography>
                }
              />
              <CardContent sx={{ display: "flex" }}>
                <TextField
                  size="small"
                  variant="filled"
                  label="Enter your email"
                  sx={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                />
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    lineHeight: 1,
                    color: "#fff",
                    height: "48px",
                    fontSize: "16px",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  Get Resume
                </Button>
              </CardContent>
            </Card>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <Card
          elevation={3}
          sx={{
            m: 2,
            borderLeft: `3px solid ${theme.palette.primary.main}`,
            borderBottom: `3px solid ${theme.palette.secondary.main}`,
          }}
        >
          <CardContent>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label={
                        <Typography sx={{ textTransform: "none" }} variant="h6">
                          Description
                        </Typography>
                      }
                      value="1"
                    />

                    <Tab
                      label={
                        <Typography sx={{ textTransform: "none" }} variant="h6">
                          Project
                        </Typography>
                      }
                      value="2"
                    />
                  </TabList>
                </Box>
                <TabPanel
                  value="1"
                  sx={{ height: "500px", overflow: "overlay", color: "#666" }}
                >
                  <ReactMarkdown >
                    {aboutDescription}
                  </ReactMarkdown>
                </TabPanel>
                <TabPanel value="2" sx={{ height: "500px" }}>
                  Coming Soon
                </TabPanel>
              </TabContext>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

About.displayName = "FullStackApp | About";

export default About;
