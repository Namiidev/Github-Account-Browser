import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import { Grid, Stack, Typography, Link } from "@mui/material";

function LocationInformation({ userState }) {
  const { location, twitter_username, blog, company } = userState;

  return (
    <>
      <Grid container 
      spacing={2}
      sx={{marginTop: "2rem"}}
      >
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}   >
            <LocationOnIcon />
            <Typography> {location || "Not Found" } </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2} >
            <TwitterIcon />
            <Link
            href={`https://twitter.com/${twitter_username} `|| "No Twitter"}
            target="_blank"
            rel="noreferrer"
            underline="hover"
          >
            {' '}
            <Typography>{`@${twitter_username}` || 'No Twitter'}</Typography>
          </Link>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2} >
            <LanguageIcon />
            <Link
                href={`${blog}`}
                target="_blank"
                rel="noreferrer"
                underline="hover"
            ><Typography>{blog || "Not Found"}</Typography></Link>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2} >
            <BusinessIcon />
            <Typography>{company || "Not Found"}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default LocationInformation;
