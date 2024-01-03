import { Box, Typography } from "@mui/material"

const StartComponent = () => {
    return(
        <Box
        sx={{
          backgroundImage: `url(${require('../assets/menu/chef_cat.jpg')})`,
          backgroundSize: "cover",
          bgColor: "secondary",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          maxWidth: "100%",
          justifyContent: "center",
        }}
      >
        <Typography
        variant="h1" 
        sx={{
          color: "white",
          alignSelf: "center",
          position: "relative",
          top: "-25vh",
          }}
        >
          EXPERIENCE<span style={{color: "black"}}> ASTONISHING </span>VEGETARIAN KITCHEN
        </Typography>
      </Box>
    )
}
export default StartComponent;