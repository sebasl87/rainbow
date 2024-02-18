import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/chackraTheme";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
