import {
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  CardHeader,
  useMediaQuery,
  useTheme,
  Card,
  styled
} from "@mui/material";
import SectionTitle from "./SectionTitle";

const dummyData = [
  {
    title: "Specialized knowledge",
    description:
      "We always stay up to date with the technological industry to ensure our expertise can handle any project.",
  },
  {
    title: "Solutions that scale",
    description: `Our scalable solutions allow you to extend your project as your 
                  business grows continuously. That way, you will not need to reinvent 
                  the wheel and don't need to reinvest in the same project and rebuild it.`,
  },
  {
    title: "Our communication process",
    description: `At all stages of project development, you will be able to
                    communicate with our developers directly via Slack,
                    WhatsApp, Skype, or any kind of Video Conference software
                    that you prefer.`,
  },
  {
    title: "Keeping things transparent",
    description: `Our pricing structure, development methods, technology
                    standards, and anything else that might affect the end
                    product are completely transparent.`,
  },
  {
    title: "Assurance of reliability",
    description: `Keeping you informed on project status and delivering the
                    results are our top priorities on time. Each project comes
                    with our guarantee of client support for six months at no
                    additional cost.`,
  },
  {
    title: "Professional experience",
    description: `Our software development experience ranges from small to
                    large enterprises. We have been serving clients globally for
                    six years.`,
  },
];

const StyledCardTitleTypography = styled(Typography)({
  paddingBottom: "16px",
});

const StyledCard = styled(Card)(({ theme }) => ({
  // background: alpha("#14b8a6", 0.05),
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  borderLeft: `3px solid ${theme.palette.secondary.main}`,
  ":hover": {
    boxShadow:
      "0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)",
  },
}));

const MethodologySection = () => {
  const theme = useTheme();
  const xxScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const xsScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <SectionTitle
        title="Our Methodology"
        subTitle="As a company, we stand out because of our lifestyle and management"
      />
      <Grid item xs={11} sm={11} md={11} lg={8}>
        <ImageList
          variant="masonry"
          cols={xxScreen ? 1 : xsScreen ? 1 : mdScreen ? 2 : 3}
          gap={xxScreen ? 24 : xsScreen ? 24 : 16}
        >
          {dummyData.map((data) => (
            <ImageListItem key={data.title}>
              <StyledCard variant="outlined" style={{ padding: 16 }}>
                <CardHeader
                  title={
                    <StyledCardTitleTypography variant="h6">
                      {data.title}
                    </StyledCardTitleTypography>
                  }
                  subheader={<Typography>{data.description}</Typography>}
                />
              </StyledCard>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </>
  );
};

export default MethodologySection;
