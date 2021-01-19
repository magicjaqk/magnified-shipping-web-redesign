import { AttachMoney } from "@styled-icons/material-rounded/AttachMoney";
import { PeopleFill } from "@styled-icons/bootstrap/PeopleFill";
import { PhoneIcon } from "@chakra-ui/icons";
import {
  Icon,
  Box,
  Text,
  Flex,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
  const isLargerThan650 = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Head>
        <title>Magnified Shipping Solutions</title>
      </Head>
      <Box w="100%" minH="100vh" bgColor="light" pb={6}>
        <Box w="100%" overflow="hidden">
          <Text
            fontFamily="imgText"
            fontWeight="bold"
            textColor="light"
            fontSize="imgText"
            textAlign="center"
            py={isLargerThan650 ? "1.5em" : ".5em"}
            px={2}
            w="100%"
            background="no-repeat center/cover url(/img/klara-vernarcova-XfNlY47n6K8-unsplash_01.jpg)"
          >
            Make your shipping life easy.
          </Text>
        </Box>
        <Flex flexDir="column" w="100%" alignItems="center">
          <Text
            as="h2"
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
            flexDir={isLargerThan650 ? "row" : "column"}
            justifyContent="space-around"
            alignItems={isLargerThan650 ? "flex-start" : "center"}
            w="80%"
            pb={8}
          >
            <Box py={3} maxW="200px">
              <Box my={2} borderRadius="100%" boxSize="200px" bg="#309301">
                <Center>
                  <Icon
                    as={AttachMoney}
                    color="light"
                    boxSize="100%"
                    p={5}
                    mx="auto"
                    ml={3}
                  />
                </Center>
              </Box>
              <Text
                textAlign="center"
                fontWeight="medium"
                fontSize="18px"
                py={1}
              >
                Save Money
              </Text>
              <Text textAlign="center" fontWeight="light" fontSize="14px">
                No hidden fees, no monthly charges. Pay for packages you ship at
                a lower cost than you do now. It’s that simple.
              </Text>
            </Box>
            <Box py={3} maxW="200px">
              <Box my={2} borderRadius="100%" boxSize="200px" bg="primary">
                <Center>
                  <PhoneIcon color="light" boxSize="100%" p={12} />
                </Center>
              </Box>
              <Text
                textAlign="center"
                fontWeight="medium"
                fontSize="18px"
                py={1}
              >
                Active Customer Support
              </Text>
              <Text textAlign="center" fontWeight="light" fontSize="14px">
                Don’t worry about filing claims, tracking packages, working with
                the carrier. We handle all that for you. Our job is to handle
                your problems. Your job is to magnify your business.
              </Text>
            </Box>
            <Box py={3} maxW="200px">
              <Box my={2} borderRadius="100%" boxSize="200px" bg="danger">
                <Center>
                  <Icon as={PeopleFill} color="light" boxSize="100%" p={12} />
                </Center>
              </Box>
              <Text
                textAlign="center"
                fontWeight="medium"
                fontSize="18px"
                py={1}
              >
                Personal Representatives
              </Text>
              <Text textAlign="center" fontWeight="light" fontSize="14px">
                When you sign up with us, you gain a representative that will
                personally get you the best rates. They will help save as much
                money as possible on each package you ship.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
