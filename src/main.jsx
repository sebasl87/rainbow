import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/chackraTheme";
import "@/styles/globals.css";
import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <DevTools />
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </Provider>
);
