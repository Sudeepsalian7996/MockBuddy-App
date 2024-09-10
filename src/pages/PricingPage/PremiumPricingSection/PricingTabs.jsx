import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import TabPanel from "./TabPanel";
import PricingCard from "pages/PricingPage/PremiumPricingSection/PricingCard";
import { pricingData } from "pages/PricingPage/PricingData";

// Main PricingPage component
const PricingTabs = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="pricing tabs">
        <Tab label="Free" sx={{ textTransform: "none" }} />
        <Tab label="1 Month" sx={{ textTransform: "none" }} />
        <Tab label="3 Months" sx={{ textTransform: "none" }} />
        <Tab label="1 Year" sx={{ textTransform: "none" }} />
      </Tabs>
      {pricingData.map((cardData, index) => (
        <TabPanel value={value} index={index}>
          <Box
            sx={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {cardData.map((data, index) => (
              <PricingCard data={data} index={index} />
            ))}
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
};

export default PricingTabs;
