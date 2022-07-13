import { Component, useContext } from "react";
import styled from "styled-components";
import BlueButton from "./BlueButton";
import Header1 from "./Header1";
import Input from "./Input";
import axios from "axios";
import UserContext from "../UserContext";

const Container = styled.div`
  margin: 20px;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login() {
    axios
      .post(
        "http://localhost:3030/login",
        {
          email: this.state.email,
          password: this.state.password,
        },
        { withCredentials: true }
      )
      .then(() => {
        this.context.checkAuth();
      });
  }

  render() {
    return (
      <>
        <Container>
          <Header1 style={{ marginBottom: "20px" }}>Log-in</Header1>
          <Input
            placeholder={"email"}
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <Input
            placeholder={"password"}
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <BlueButton onClick={() => this.login()}>Login</BlueButton>
        </Container>
      </>
    );
  }
}

LoginPage.contextType = UserContext;

export default LoginPage;
