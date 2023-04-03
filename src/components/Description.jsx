import { Stack, Typography, } from "@mui/material"
import PaperInformation from "./PaperInformation"
import LocationInformation from "./LocationInformation"



function Description({userState}) {
    const { bio } = userState
  return (
    <>
      <Stack sx={{
        justifyContent: "center",

      }}>
        <Typography variant="body1">
            {bio ?? "User has no description"}
        </Typography>
      </Stack>
      <PaperInformation userState={userState} ></PaperInformation>
        <LocationInformation sx={{marginTop: "2rem"}} userState={userState} ></LocationInformation>
    </>
  )
}

export default Description
