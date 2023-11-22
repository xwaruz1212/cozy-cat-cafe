import React from "react";
import { Box, Typography, Container } from "@mui/material";


const Menu: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${require('../assets/menu/chef_cat.jpg')})`,
          backgroundSize: "cover",
          bgColor: "secondary",
          display: "flex",
          flexDirection: "column",
          height: "600px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">EXPERIENCE ASTONISHING VEGETARIAN KITCHEN</Typography>
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          bgColor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <Box
        sx={{
          bgColor: "secondary",
          display: "flex",
          flexDirection: "column",
          height: "200px",
          width: "300px",
          gap: "30px"
        }}
      >
        <img
          src={require('../assets/menu/coffe.jfif')}
          style={{ maxHeight: "200px", width: "100%" }}
        />
        <img
          src={require('../assets/menu/curry.jfif')}
          style={{ maxHeight: "200px", width: "100%" }}
        />
        <img
          src={require('../assets/menu/matcha.jfif')}
          style={{ maxHeight: "200px", width: "100%" }}
        />
      <img
          src={require('../assets/menu/onion.png')}
          style={{ maxHeight: "200px", width: "100%" }}
        />
        <img
          src={require('../assets/menu/tacos.jfif')}
          style={{ maxHeight: "200px", width: "100%" }}
        />
        <img
          src={require('../assets/menu/tofu.jfif')}
          style={{ maxHeight: "200px", width: "100%" }}
        />
      </Box>
      </Container>
    </>
  );
};

export default Menu;
