import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "secondary",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100vw",
          position: "relative",
          marginLeft: "-41px",
        }}
      >
        <img
          src="https://via.placeholder.com/600/771796"
          style={{ maxHeight: "500px", width: "100vw" }}
        />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "secondary",
            display: "flex",
            flexDirection: "column",
            maxHeight: "700px",
            maxWidth: "700px",
            position: "relative",
            paddingTop: "100px",
            paddingBottom: "100px",
            left: "70px",
          }}
        >
          <Typography variant="h1">OUR MISSION</Typography>
          <br />
          <Typography variant="h4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            perspiciatis ipsa temporibus voluptatem nihil, eligendi voluptatum
            officiis nesciunt officia fugit magni consequuntur vero adipisci
            expedita, ratione pariatur accusamus et vitae!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
