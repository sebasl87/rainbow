import { Footer, Header } from "@/components/organisms";
import { Box } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";

export const LayoutGral = () => {
  return (
    <>
      <Header />
      <Box
        mt={{
          base: "64px",
          md: "80px",
          lg: "88px",
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default LayoutGral;
