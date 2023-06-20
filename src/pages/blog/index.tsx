import { Grid, Typography } from "@mui/material"

export default function BlogPage() {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ height: "calc(100vh - 72px)", overflow: "overlay" }}>
      <Grid item xs={2}>
        <Typography color="secondary" sx={{ textAlign: "center" }} variant="h5">Updating To NextJS...</Typography>
      </Grid>
    </Grid>
  )
}

BlogPage.displayName = "FullStackApp | Blog"
