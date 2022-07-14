import { useState, useContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import BlueButton from "./BlueButton";
import Header1 from "./Header1";
import UserContext from "../UserContext";

const Container = styled.div`
  margin: 20px;
`;

export default function ProfilePage() {
  const { checkAuth, user } = useContext(UserContext);
  const [navigateToHomePage, setNavigateToHomePage] = useState(false);
  function logout() {
    axios
      .post("http://localhost:3030/logout", {}, { withCredentials: true })
      .then(() => {
        checkAuth().catch(() => setNavigateToHomePage(true));
      });
  }

  return (
    <>
      {navigateToHomePage && <Navigate to={"/"} />}
      <Container>
        <Header1>Profile</Header1>
        {user && (
          <>
            <p>Hello {user.email}</p>
            <BlueButton onClick={() => logout()}>Logout</BlueButton>
          </>
        )}
        {!user && <p>Your are not logged in!</p>}
      </Container>
    </>
  );
}
