import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import TabPanel from "./TabPanel";

// Main PricingPage component
const PricingTabs = () => {
  const [value, setValue] = useState(0);

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
        <Tab label="1 Month" />
        <Tab label="3 Months" />
        <Tab label="6 Months" />
        <Tab label="Lifetime" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Typography variant="h5">1 Month Plan</Typography>
        <Typography>Access for 1 month</Typography>
        <Typography>Price: $19.99</Typography>
        <Typography>Features:</Typography>
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
        </ul>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Typography variant="h5">3 Months Plan</Typography>
        <Typography>Access for 3 months</Typography>
        <Typography>Price: $49.99</Typography>
        <Typography>Features:</Typography>
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
          <li>Feature D</li>
        </ul>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Typography variant="h5">6 Months Plan</Typography>
        <Typography>Access for 6 months</Typography>
        <Typography>Price: $89.99</Typography>
        <Typography>Features:</Typography>
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
          <li>Feature D</li>
          <li>Feature E</li>
        </ul>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Typography variant="h5">Lifetime Plan</Typography>
        <Typography>Lifetime access</Typography>
        <Typography>Price: $199.99</Typography>
        <Typography>Features:</Typography>
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
          <li>Feature D</li>
          <li>Feature E</li>
          <li>Feature F</li>
        </ul>
      </TabPanel>
    </Box>
  );
};

export default PricingTabs;
