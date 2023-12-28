import { Container, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { locationsItems } from "./LocationsData";
import { motion, AnimatePresence } from "framer-motion";


interface Location {
  city: string;
  img: string;
  description: string;
}

interface Props {
  index: number;
}

const LocationsCard: React.FC<Props> = ({ index },) => {


  const [active, setActive] = useState(0);
  const handleOnClick = () => {
    setActive((prevActive) => (prevActive ? 0 : 1))
  }

  const location: Location = locationsItems[index]



  return <React.Fragment>


    <Container
      disableGutters={true}
      maxWidth="xl"
      sx={{
        backgroundColor: "secondary.main",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        gap: "50px",
      }}
    >



      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          marginTop: "30px",
          marginBottom: "30px",
          gap: "30px",

          "& img": {
            height: active ? { xs: "50%", md: "40vh" } : { xs: "50%", md: "30vh" },
            width: active ? { xs: "50%", md: "25vw" } : { xs: "50%", md: "20vw" },
            cursor: "pointer",
            transitionDuration: "1s",
          }
        }
        }
      >
        <img
          onClick={handleOnClick}



          srcSet={require("../assets/locations/" + location.img)}
          src={require("../assets/locations/" + location.img)}
          alt={location.city}
          loading="lazy"
        />
        <Box
          sx={{

            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
            cursor: "default",
          }}
        >
          <Typography variant="h4">{location.city}</Typography>
          <Typography variant="h4" sx={{
            display: active ? "flex" : "none",
            width: "40vw",

          }}>{location.description}</Typography>

        </Box>
      </Box>
    </Container>

  </React.Fragment>
};

const LocationsComponent: React.FC = () => {
 
  const [isVisible, setVisible] = useState(true);
   return (
    <>

<AnimatePresence>
      {isVisible && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        > <Typography variant="h1" sx={{
          backgroundColor: "secondary.main",
          textAlign: "center",
          width: "100%",
  
        }}>VISIT US</Typography>
        {[0, 1, 2].map((index) => (
          <LocationsCard key={index} index={index}
          />
        ))}
        </motion.div>
      )}
    </AnimatePresence>

      
    </>
  )
}

export default LocationsComponent;
