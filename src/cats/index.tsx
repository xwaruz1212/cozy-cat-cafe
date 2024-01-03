import React, { useState } from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { catItems } from "./catItems";
import { motion, AnimatePresence } from "framer-motion"
import StartComponent from "./StartComponent";
 
const Cats: React.FC = () => {
  const [isVisible] = useState(true)
  return(
  <>
    
    <AnimatePresence>
    
    {isVisible && (
     
      <motion.div
       
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      > <StartComponent /> 
      </motion.div>
    )}
  </AnimatePresence>

    
    
   
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
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr"},
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          gap: "32px",
        }}>
        {catItems.map((catItem) => ( 
            <Box
             sx={{
               display: "flex",
               flexDirection: {xs: "column",md: "column", lg:"row"},
               alignItems: "center",
               alignContent: "center",
               marginTop: "20px",
               marginBottom: "20px",
               gap: "30px",

               "& img": {
                width: {xs: "20vh", sm:"30vh",md: "40vh"},
                height: {xs: "7,5vw", sm:"12vw", md: "15vw"}
               }
              }}
            >
              <img
                srcSet={require("../assets/cats/" + catItem.img)}
                src={require("../assets/cats/" + catItem.img)}
                alt={catItem.name}
                loading="lazy"
                
              />
              <Box
               sx={{
                  width: {xs: "50%" , md: "20vw", lg: "15vw"},
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