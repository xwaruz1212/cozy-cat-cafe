import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { catItems } from "./catItems";

const Cats: React.FC = () => {
  return(
  <>
    <Container
     maxWidth="xl"
     sx={{
       backgroundColor: "#f6e6bf",
       display: "flex",
       flexDirection: "row",
       height: "90vh",
       width: "100%",
       position: "relative",
       alignItems: "center",
       alignContent: "center",
     }}>
      
          
      <Box
      sx={{
        width: "50%",
        paddingTop: "32px",
        paddingBottom: "100px",
        paddingRight: "32px",
        display: "flex",
        flexDirection: "column",
        position: "relative"
      }}>
         <Typography variant="h1">We love cats</Typography>
          
          <Typography variant="h4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            perspiciatis ipsa temporibus voluptatem nihil, eligendi voluptatum
            officiis nesciunt officia fugit magni consequuntur vero adipisci
            expedita, ratione pariatur accusamus et vitae!
          </Typography>
         
          
          
          
          
          </Box>
          <img 
              src={require('../assets/menu/chef_cat.jpg')}
              style={{maxHeight: "400px", width: "50%"}}

            />
    </Container>
    <Container
     maxWidth="xl"
     disableGutters={true}
     sx={{
      backgroundColor: "white", 
      width: "100%", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      gap: "32px",
      paddingBottom: "32px",
      paddingTop: "32px"
      
     }}>
      <Typography variant="h1">Our cats</Typography>
     <Box
        sx={{
          display: "grid", 
          gridTemplateColumns: "1fr 1fr",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          gap: "32px",
        }}>
        {catItems.map((catItem) => ( 
            <Box
             sx={{
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               alignContent: "center",
               marginTop: "20px",
               marginBottom: "20px",
               gap: "30px",
              }}
            >
              <img
                srcSet={require("../assets/menu/" + catItem.img)}
                src={require("../assets/menu/" + catItem.img)}
                alt={catItem.name}
                loading="lazy"
                style={{
                height: "40vh",
                width: "15vw",
               
                
                }}
              />
              <Box
               sx={{
                  width: "15vw",
                  cursor: "default",
                }}
              >
                <Typography variant="h5" style={{color: "green", }}>{catItem.name}</Typography>
                <Typography variant="h2" style={{fontSize: "16px"}}>
                  {catItem.note} 
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Container> 
  
  </>
  );
};
export default Cats;