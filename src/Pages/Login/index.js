import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import "./index.css";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password);
  };

  return (
    <div className="login">
      <div className="header"></div>
      <div className="title">
        <h1 className="h1-text">Log into your account</h1>

        <p className="p-text">
          Don't have an account?{" "}
          <a className="link-register" href="/cadastro">
            Sign up
          </a>
        </p>
        <form className="form-input" onSubmit={handleSubmit}>
          <div className="field">
            <h3 className="email">Email</h3>
            <InputGroup margin={"0em 0em 1em 0em"} size="md">
              <Input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                pr="4.5rem"
                placeholder="Enter email"
              />
            </InputGroup>
            <h3 className="password">Password</h3>
            <InputGroup size="md">
              <Input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                margin={"0em 0em 1em 0em"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <div className="container-btn">
              <Button type="submit" width={"100%"} colorScheme="blue">
                Sign in
              </Button>
            </div>
            <div className="container-btn-recuperar">
              <a className="btn-forgot" href="/recuperar-senha">
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
