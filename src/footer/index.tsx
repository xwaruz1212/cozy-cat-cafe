import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth="xl"
        disableGutters={true}
        sx={{
          bgcolor: "primary.main",
          display: "flex",
          flexDirection: "column",
          width: 1,
          gap: "2vh",
        }}
      >
        <Box
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "primary.contrastText",
            paddingLeft: "5em",
          }}
        >
          <Typography variant="h3">Contact</Typography>
          <br />
          <Typography variant="h4">
            Cat Headquarters <br /> Cat Street 42 <br /> MeowCity
          </Typography>
        </Box>
        <Box
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            float: "right",
            bgcolor: "#634e39",
            width: 1,
            height: "10vh",
            paddingRight: "3em",
            margin: "0",
            gap: "3em",
          }}
        >
          <Typography variant="h4" sx={{ color: "primary.contrastText" }}>
            FAQ
          </Typography>
          <Typography variant="h4" sx={{ color: "primary.contrastText" }}>
            Policy
          </Typography>
          <Typography variant="h4" sx={{ color: "primary.contrastText" }}>
            Terms & Conditions
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
