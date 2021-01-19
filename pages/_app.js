import "../styles/globals.css";
import CustomTheme from "../styles/CustomTheme";
import { ChakraProvider } from "@chakra-ui/react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={CustomTheme} resetCSS>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
