import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";


const Cats: React.FC = () => {
  return(
  <>
    <Container
     maxWidth="xl"
     sx={{
       bgColor: "#ceb995",
       display: "flex",
       flexDirection: "column",
       height: "100%",
       width: "100%",
       position: "relative",
     }}>
      <Box
      sx={{
        width: "50%",
        left: "32px",
        paddingTop: "100px",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: "column",
        maxHeight: "700px",
        maxWidth: "700px",
        position: "relative"
      }}>
        <Typography variant="h1">We love cats</Typography>
          <br />
          <Typography variant="h4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            perspiciatis ipsa temporibus voluptatem nihil, eligendi voluptatum
            officiis nesciunt officia fugit magni consequuntur vero adipisci
            expedita, ratione pariatur accusamus et vitae!
          </Typography>
          </Box>
          <Box
           sx={{
            width: "50%",
            left: "650px",
            paddingTop: "100px",
            paddingBottom: "100px",
            display: "flex",
            flexDirection: "column",
            maxHeight: "500px",
            maxWidth: "500px",
            position: "fixed"
          }}
          >
            <img
              src={require('../assets/menu/chef_cat.jpg')}
            />
             
          </Box>
    </Container>
  
  </>
  );
};

export default Cats;
