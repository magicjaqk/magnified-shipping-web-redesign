import "../styles/globals.css";
import CustomTheme from "../styles/CustomTheme";
import { ChakraProvider } from "@chakra-ui/react";

import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={CustomTheme}>
        <Nav />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
