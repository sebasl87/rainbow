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
        flex-direction="column"
        mt={{
          base: "134px",
          md: "154px",
          lg: 32,
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default LayoutGral;
