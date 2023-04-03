import { Paper, Stack, Typography } from "@mui/material";

function PaperInformation({ userState }) {
  const { public_repos, followers, following } = userState;
  return (
    <>
      <Paper elevation={3}>
        <Stack spacing={3} direction="row" sx={{
            justifyContent: 'space-evenly'
        }} >
          <Stack>
            <Typography variant="h5" >Repos</Typography>
            <Typography variant="h6" >{public_repos}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h5" >Followers</Typography>
            <Typography variant="h6">{followers}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">follows</Typography>
            <Typography variant="h6">{following}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default PaperInformation;
