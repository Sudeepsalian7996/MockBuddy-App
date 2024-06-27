import React, { Suspense } from "react";
import Loader from "./Loader";
import { Box } from "@mui/material";

const LazyLoadComponent = (component) => {
  return (
    <Suspense
      fallback={
        <Box
          width="100%"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Loader />
        </Box>
      }
    >
      {component}
    </Suspense>
  );
};

export default LazyLoadComponent;
