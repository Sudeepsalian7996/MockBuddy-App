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
import { CurrencyRupee } from "@mui/icons-material";
import React from "react";
import MockBuddyLogo from "assets/images/mocklogo.svg";

const PricingCard = ({ data, index }) => {
  return (
    <Container
      sx={{
        width: { sm: "352px" },
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        borderRadius: "0.5rem",
        padding: { xs: "1rem", sm: "2rem" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          background:
            data.badge === "Free"
              ? "#2eb281"
              : data.badge === "Plus"
              ? "#53b0da"
              : data.badge === "Elite"
              ? "#c6acae"
              : data.badge === "Pro"
              ? "#c1b658"
              : "black",
          borderRadius: "0.5rem 0px",
          width: "50%",
          height: "7%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "700", color: "white" }}>
          {data.badge}
        </Typography>
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
        {data.type}
      </Typography>
      <Typography
        sx={{ margin: "0.5rem 0rem", fontWeight: 500, display: "flex" }}
      >
        {data.price > 0 ? (
          <>
            <CurrencyRupee sx={{ width: "1.1rem" }} />
            {data.price}
          </>
        ) : (
          "Free"
        )}{" "}
        for {data.duration}
      </Typography>
      <Divider sx={{ marginTop: "1.5rem" }} />
      <List>
        {data.description.map((desc, index) => (
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
            <ListItemText primary={desc} tabIndex={index} />
          </ListItem>
        ))}
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
            background:
              data.badge === "Free"
                ? "#2eb281"
                : data.badge === "Plus"
                ? "#53b0da"
                : data.badge === "Elite"
                ? "#c6acae"
                : data.badge === "Pro"
                ? "#c1b658"
                : "white",
            fontWeight: 600,
            borderRadius: "2rem",
            transition: "0.3s background",

            "&:hover": {
              background:
                data.badge === "Free"
                  ? "#279973"
                  : data.badge === "Plus"
                  ? "#4a9ecb"
                  : data.badge === "Elite"
                  ? "#b09a9c"
                  : data.badge === "Pro"
                  ? "#b1a14e"
                  : "gray",
            },
          }}
        >
          {data.price > 0 ? "Get Premium" : "Start for Free"}
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
        {data.shortDescription}
      </Typography>
    </Container>
  );
};

export default PricingCard;
