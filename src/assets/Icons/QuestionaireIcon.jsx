import { Box } from "@mui/material";
import React from "react";

const QuestionaireIcon = () => {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      sx={{
        color: "blue",
        width: { xs: 50, sm: 30 },
        height: { xs: 50, sm: 30 },
      }} // Change color here
    >
      <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"></path>{" "}
    </Box>
  );
};

export default QuestionaireIcon;
