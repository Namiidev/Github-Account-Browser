import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

function Searcher({ setInputUser }) {
  const [valueInput, setValueInput] = useState("");

  const onSearchValue = (e) => {
    const inputValue = e.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = (e) => {
    setInputUser(valueInput);
    e.preventDefault();
  };


  return (
    <Stack
      sx={{
        direction: "row",
        marginTop: "30px",
        marginBottom: "2.2rem",
        width: "80%",
      }}
    >
      <TextField
        type="text"
        onSubmit={handleSubmit}
        autoComplete="off"
        label="Github User"
        id="outlined-basic"
        placeholder="Octocat"
        onChange={onSearchValue}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSubmit} >
              <SearchIcon onClick={handleSubmit} />
            </IconButton>
          ),
        }}
      ></TextField>
    </Stack>
  );
}

export default Searcher;
