import { Container } from "@mui/system";
import React from "react";
import Box from "@mui/material/Box";
const MainLayout = (props) => {
  return (
    <Container
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Box sx={{ minHeight: "80vh" }}>{props.children}</Box>
    </Container>
  );
};

export default MainLayout;
