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
  Square,
  HStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { RightArrow } from "styled-icons/boxicons-regular";
import { FlagUsa, GlobeAmericas, MailBulk, Truck } from "styled-icons/fa-solid";

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
        <Flex
          w="100%"
          minH="500px"
          bg="dark"
          flexDir={isLargerThan650 ? "row" : "column"}
          justify={isLargerThan650 ? "space-around" : "center"}
          align="center"
        >
          <Text
            as="h1"
            textColor="secondary"
            fontSize={isLargerThan650 ? "48px" : "38px"}
            maxW="650px"
            px={8}
          >
            Our customers work in a diverse set of industries:
          </Text>
          <Text
            as="ul"
            textColor="light"
            fontSize={isLargerThan650 ? "36px" : "20px"}
            px={1}
            fontWeight="light"
          >
            <li>
              <Icon as={RightArrow} p={2} mb={1} /> Consumer Products
            </li>
            <li>
              <Icon as={RightArrow} p={2} mb={1} /> Industrial
            </li>
            <li>
              <Icon as={RightArrow} p={2} mb={1} /> Technology and Electronics
            </li>
            <li>
              <Icon as={RightArrow} p={2} mb={1} /> Pharmaceutical and Health
              Care
            </li>
            <li>
              <Icon as={RightArrow} p={2} mb={1} /> Food Service and
              Consolidation
            </li>
            <li>
              <Icon as={RightArrow} p={2} mb={1} /> Etc.
            </li>
          </Text>
        </Flex>
        <Text
          w="100%"
          minH="400px"
          textColor="light"
          fontSize={isLargerThan650 ? "imgText" : "54px"}
          textAlign="center"
          verticalAlign="middle"
          p={isLargerThan650 ? "2em" : 3}
          background="no-repeat center/cover url(img/klara-vernarcova-60zqbdiLHg0-unsplash.jpg)"
          bgPos="50% 45%"
        >
          We’re with you and your package every step of the way.
        </Text>
        <Flex
          p={4}
          flexWrap="wrap"
          justify="space-around"
          align="center"
          minH="400px"
          maxW="100%"
        >
          <HStack my={3} align="start">
            <Square
              size={isLargerThan650 ? "130px" : "65px"}
              bg="primary"
              mt={3}
              borderRadius={3}
            >
              <Icon as={MailBulk} color="light" boxSize="80%" />
            </Square>
            <Flex
              flexDir="column"
              ml={3}
              maxW="400px"
              justifyContent="flex-start"
            >
              <Text
                as="h4"
                fontSize={isLargerThan650 ? "36px" : "30px"}
                fontWeight="light"
                py="0px"
              >
                Small Parcel Delivery
              </Text>
              <Text fontWeight="light" fontSize="16px" pt="0px">
                Getting packages from point A to point B is critical for most
                business. We can provide many options and choices on how to get
                them there, and we can always find some way to make it more
                economical for you.
              </Text>
            </Flex>
          </HStack>
          <HStack my={3} align="start">
            <Square
              size={isLargerThan650 ? "130px" : "65px"}
              bg="primary"
              mt={3}
              borderRadius={3}
            >
              <Icon as={FlagUsa} color="light" boxSize="80%" />
            </Square>
            <Flex
              flexDir="column"
              ml={3}
              maxW="400px"
              justifyContent="flex-start"
            >
              <Text
                as="h4"
                fontSize={isLargerThan650 ? "36px" : "30px"}
                fontWeight="light"
                py="0px"
              >
                Domestic Shipments
              </Text>
              <Text fontWeight="light" fontSize="16px" pt="0px">
                Economical shipping services can make or break a small
                businesses budget. Magnified Shipping Solutions focuses on
                providing the best value for those businesses who are looking to
                expand and grow with the ever changing business market.
              </Text>
            </Flex>
          </HStack>
          <HStack my={3} align="start">
            <Square
              size={isLargerThan650 ? "130px" : "65px"}
              bg="primary"
              mt={3}
              borderRadius={3}
            >
              <Icon as={GlobeAmericas} color="light" boxSize="80%" />
            </Square>
            <Flex
              flexDir="column"
              ml={3}
              maxW="400px"
              justifyContent="flex-start"
            >
              <Text
                as="h4"
                fontSize={isLargerThan650 ? "36px" : "30px"}
                fontWeight="light"
                py="0px"
              >
                International Shipments
              </Text>
              <Text fontWeight="light" fontSize="16px" pt="0px">
                Magnified Shipping Solutions has created relationships with
                multiple carriers to provide the absolute best options for
                import , export, and country to country shipping of goods and
                documents.
              </Text>
            </Flex>
          </HStack>
          <HStack my={3} align="start">
            <Square
              size={isLargerThan650 ? "130px" : "65px"}
              bg="primary"
              mt={3}
              borderRadius={3}
            >
              <Icon as={Truck} color="light" boxSize="80%" />
            </Square>
            <Flex
              flexDir="column"
              ml={3}
              maxW="400px"
              justifyContent="flex-start"
            >
              <Text
                as="h4"
                fontSize={isLargerThan650 ? "36px" : "30px"}
                fontWeight="light"
                py="0px"
              >
                LTL/FTL Freight
              </Text>
              <Text fontWeight="light" fontSize="16px" pt="0px">
                Choice is everything when it comes to freight. Some carriers
                handle some lanes better than others and price accordingly.
                Having access to 60+ carriers quoting your shipments from one
                login, you’ll know you’re getting the best rates with the
                shortest delivery times.
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </Box>
      <style jsx>{`
        li {
          list-style-type: none;
        }
      `}</style>
    </>
  );
};

export default Home;
