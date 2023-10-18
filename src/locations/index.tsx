import { Container, Box, Typography } from "@mui/material";
import React from "react";

const Locations: React.FC = () => {
  return <React.Fragment>
    <Container
     maxWidth="xl"
     sx={{
       bgColor: "#f6e6bf",
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
            height: "600px",
            paddingTop: "70px",
            paddingBottom:"32px",
            position:"relative",
          }}
      >
          <Typography variant="h1">VISIT US</Typography>
           <img
          src={require("../assets/locations/location1.png")}
           style={{maxHeight: "250px",width: "350px"}}
          />
          <Typography variant="h2">KRAKÓW</Typography>
        </Box>
        
        <Box
          sx={{
            
            display: "flex",
            flexDirection: "column",
            height: "600px",
            paddingTop: "70px",
            paddingBottom:"32px"
          }}
      >
          
           <img
          src={require("../assets/locations/location3.png")}
           style={{maxHeight: "250px",maxWidth: "350px"}}
          />
          <Typography variant="h2">BOCHNIA</Typography>
        </Box>

        <Box
          sx={{
            
            display: "flex",
            flexDirection: "column",
            height: "600px",
            paddingTop: "70px",
            paddingBottom:"32px"
          }}
      >
          
           <img
          src={require("../assets/locations/location2.png")}
           style={{maxHeight: "250px",maxWidth: "350px"}}
          />
          <Typography variant="h2">LONDON</Typography>
        </Box>
           
        
       <Box>
       <Typography variant="h6">Contact</Typography>
       <Typography variant="h6">Cat Street 42</Typography>
       
       </Box>
        
          
      



        
        </Container>
  </React.Fragment>
};

export default Locations;
