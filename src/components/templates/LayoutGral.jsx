import { Footer, Header } from "@/components/organisms";
import { Box } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";

export const LayoutGral = () => {
  return (
    <>
      <Header />
      <Box
        width="100%"
        display="flex"
        mt={{
          base: "134px",
          md: "154px",
          lg: 32,
        }}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          maxW="1248px"
          mb="200px"
        >
          <Outlet />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default LayoutGral;
