import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import MockBuddyLogo from "assets/images/mocklogo.svg";

const PricingCard = () => {
  return (
    <Container
      sx={{
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        borderRadius: "0.5rem",
        padding: "2rem",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "#a5bbd1",
          borderRadius: "0.5rem 0px",
          width: "50%",
          height: "6%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "700" }}>Elite</Typography>
      </Box>
      <Box
        sx={{
          padding: "2rem 0 1rem 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box component="img" src={MockBuddyLogo} sx={{ width: "40px" }}></Box>
        <Typography sx={{ fontWeight: "500", fontSize: "1.1rem" }}>
          Premium
        </Typography>
      </Box>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "2rem", color: "#262f37" }}
      >
        Professional
      </Typography>
      <Typography sx={{ margin: "0.5rem 0rem", fontWeight: 500 }}>
        $19 for 2 months
      </Typography>
      <Divider sx={{ marginTop: "1.5rem" }} />
      <List>
        <ListItem sx={{ position: "relative", paddingTop: 0 }}>
          <ListItemIcon
            sx={{
              minWidth: "auto",
              marginRight: 1,
            }}
          >
            <CircleIcon
              sx={{
                color: "black",
                fontSize: "0.5rem",
                position: "absolute",
                top: "12px",
                left: "0",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Practice for internships and entry roles." />
        </ListItem>
        <ListItem sx={{ position: "relative", paddingTop: 0 }}>
          <ListItemIcon
            sx={{
              minWidth: "auto",
              marginRight: 1,
            }}
          >
            <CircleIcon
              sx={{
                color: "black",
                fontSize: "0.5rem",
                position: "absolute",
                top: "12px",
                left: "0",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Practice for and entry roles." />
        </ListItem>
        <ListItem sx={{ position: "relative", paddingTop: 0 }}>
          <ListItemIcon
            sx={{
              minWidth: "auto",
              marginRight: 1,
            }}
          >
            <CircleIcon
              sx={{
                color: "black",
                fontSize: "0.5rem",
                position: "absolute",
                top: "12px",
                left: "0",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Practice for internships and entry roles.Practice for and entry roles with ships" />
        </ListItem>
        <ListItem sx={{ position: "relative", paddingTop: 0 }}>
          <ListItemIcon
            sx={{
              minWidth: "auto",
              marginRight: 1,
            }}
          >
            <CircleIcon
              sx={{
                color: "black",
                fontSize: "0.5rem",
                position: "absolute",
                top: "12px",
                left: "0",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Practice for internships and entry roles." />
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            padding: "0.75rem 2rem",
            marginBottom: "1rem",
            color: "white",
            fontSize: "1rem",
            background: "#a5bbd1 !important",
            fontWeight: 600,
            borderRadius: "2rem",

            "&:hover": {
              opacity: "0.8",
            },
          }}
        >
          Get Premium Individual
        </Button>
      </Box>
      <Typography
        sx={{
          color: "#767272",
          fontSize: "13px",
          lineHeight: "1.1rem",
          textAlign: "center",
        }}
      >
        For students preparing for internships or entry-level jobs.students
        preparing for internships or entry-level jobs
      </Typography>
    </Container>
  );
};

export default PricingCard;
