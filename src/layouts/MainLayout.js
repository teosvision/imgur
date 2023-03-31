import { Container } from "@mui/system";
import React from "react";

const MainLayout = (props) => {
  return (
    <Container style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      {props.children}
    </Container>
  );
};

export default MainLayout;
