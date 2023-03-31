import React from "react";
import Container from "@mui/material/Container";
import "../App.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container className="header">
      <Link to="/">
        <h1 className="name">Viral Images</h1>
      </Link>
      <div className="function">
        <h3> Viral </h3>
        <h3> JoViral </h3>
        <h3> Sort </h3>
      </div>
    </Container>
  );
};

export default Header;
