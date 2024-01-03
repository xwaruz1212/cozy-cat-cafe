import { Box, Container, Typography } from "@mui/material"

const StartComponent = () => {
return(
    <Container
     maxWidth="xl"
     sx={{
       backgroundColor: "#f6e6bf",
       display: "flex",
       flexDirection: {xs: "column", sm: "column", md:"row"},
       height: "90vh",
       width: "100%",
       position: "relative",
       alignItems: "center",
       alignContent: "center",
       "& img": {
        width: {xs: "50vh", sm:"70vh",md: "50%"},
       
       }
     }}>
      
          
      <Box
      sx={{
        width: {xs: "100%", sm: "100%", md: "50%"},
        paddingTop: {xs: "16px", md:"32px"},
        paddingBottom: {xs:"50px", md:"100px"},
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
              

            />
    </Container>
)
}
export default StartComponent;
