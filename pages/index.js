import {
  Box,
  Image,
  Center,
  Text,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
  const [isSmallWidth] = useMediaQuery("(min-width: 650px)");

  return (
    <>
      <Head>
        <title>Magnified Shipping Solutions</title>
      </Head>
      <Box w="100%" minH="100vh" bgColor="light">
        <Box w="100%" overflow="hidden">
          <Text
            fontFamily="imgText"
            fontWeight="bold"
            textColor="light"
            fontSize="imgText"
            textAlign="center"
            py={isSmallWidth ? "1.5em" : ".5em"}
            w="100%"
            background="no-repeat center/cover url(/img/klara-vernarcova-XfNlY47n6K8-unsplash_01.jpg)"
          >
            Make your shipping life easy.
          </Text>
        </Box>
        <Flex flexDir="column" w="100%" alignItems="center">
          <Text
            fontFamily="body"
            fontSize="bodyHeader"
            textColor="dark"
            textAlign="center"
            p={1}
            my={6}
          >
            Magnified Customer Benefits
          </Text>
          <Flex
            flexDir={isSmallWidth ? "row" : "column"}
            justifyContent="space-around"
            alignItems="center"
            w="80%"
          >
            <Box my={2} borderRadius="100%" boxSize="200px" bg="#309301"></Box>
            <Box my={2} borderRadius="100%" boxSize="200px" bg="primary"></Box>
            <Box my={2} borderRadius="100%" boxSize="200px" bg="danger"></Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
