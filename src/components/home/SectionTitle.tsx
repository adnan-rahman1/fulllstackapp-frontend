import { Divider, Grid, Typography, alpha } from "@mui/material";

type SectionTitleProps = {
  title: string;
  subTitle: string;
};
const SectionTitle = ({ title, subTitle }: SectionTitleProps) => {
  return (
    <Grid item xs={10} sx={{ textAlign: "center", mt: 4 }}>
      <Typography
        color="primary"
        style={{ marginTop: "80px", fontWeight: 500, fontSize: "28px" }}
        variant="h5"
      >
        {title}
      </Typography>
      <Divider
        sx={{
          background: alpha("#000", 0.05),
          height: "3px",
          width: "200px",
          display: "inline-flex",
        }}
      />
      <Typography
        variant="h6"
        style={{
          paddingBottom: 48,
        }}
      >
        {subTitle}
      </Typography>
    </Grid>
  );
};

export default SectionTitle;
