import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import { useEffect, useState } from "react";
import gettingUsers from "./services/users";
import Card from "./components/Card";
import "./App.css"

function App() {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState(inputUser);
  const [notfound, setNotFound] = useState(false)
  async function gettingUser(user) { 
    const userResponse = await gettingUsers(user);
    if (userState === 'octocat') {
      localStorage.setItem('octocat', userResponse)
      
    }

    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse)
    }
    console.log(userResponse)
  }

  useEffect(() => {
    gettingUser(inputUser);
  }, [inputUser]);

  console.log(inputUser);
  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "92vw",
        height: "600px",
        borderRadius: "16px",
        marginTop: "13rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher
        setInputUser={setInputUser}
        inputUser={inputUser}
        userState={userState}
      ></Searcher>
      <Card userState={userState} ></Card>
    </Container>
  );
}

export default App;
