import { Avatar, Grid, Stack } from "@mui/material";
import PrincipalInformation from "./PrincipalInformation";
import Description from "./Description";

function Card({ userState }) {
  const { avatar_url } = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "15px",
      }}
    >
      <Grid item xs={3}>
        <Avatar
          alt={"github pfp"}
          src={avatar_url}
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack 
        direction="column"
        spacing={1}
        sx={{
            margin: "8px"
        }}
        >
          <PrincipalInformation userState={userState}></PrincipalInformation>
          <Description userState={userState}></Description>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Card;
