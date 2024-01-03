import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { menuItems } from "./menuItems";
import { motion, AnimatePresence } from "framer-motion"
import StartComponent from "./StartComponent";


const Menu: React.FC = () => {
  const [isVisible] = useState(true)
  return (
    <>
      <AnimatePresence>
      
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          >
        <StartComponent />
        </motion.div>

      )}
      </AnimatePresence>
      
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
        }}>
      </Box>
      </Container>

      <Container
        disableGutters={true} 
        maxWidth="xl" 
        sx={{
          width: "100%", 
          gridTemplateColumns: {sm: "1fr", lg: "1fr 1fr"},
          display: "flex", 
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          gap: "20px",
        }}
      >
        {menuItems.map((menuItem) => (
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
              srcSet={require("../assets/menu/" + menuItem.img)} 
              src={require("../assets/menu/" + menuItem.img)}
              alt={menuItem.name}
              loading="lazy"
              style={{
                height: "30vh",
                width: "20vw",
                border: "solid 2px #634e39",
                borderRadius: "50px",
              }}
            />
            <Box
              sx={{
                width: {sm:"10vw", lg: "1fr 1fr"},
                cursor: "default",
              }}
            >
              <Typography variant="h5">{menuItem.name}</Typography>
              <Typography variant="h6">
                {menuItem.price} {menuItem.currency}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
         </>
            );
          };
          

export default Menu;

