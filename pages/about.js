import { Box, Text, Flex, useBreakpointValue, Center } from "@chakra-ui/react";
import Head from "next/head";

const about = () => {
  const isLargerThan650 = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box w="100%" minH="100vh" bgColor="light" pb={6}>
        <Box w="100%" overflow="hidden">
          <Text
            fontFamily="imgText"
            fontWeight="bold"
            textColor="light"
            fontSize="imgText"
            textAlign="center"
            textShadow="2px 2px 20px black"
            py={isLargerThan650 ? "1.5em" : ".5em"}
            px={2}
            w="100%"
            background="no-repeat center/cover url(/img/alex-perz-61qBPJeUYcE-unsplash.jpg)"
            bgSize={isLargerThan650 ? "100%" : "110%"}
            bgPos="50% 49%"
          >
            About
          </Text>
          <Center>
            <Flex
              flexDir="column"
              maxW="80%"
              align="center"
              justify="flex-start"
            >
              <Text
                as="h2"
                fontFamily="body"
                fontSize="bodyHeader"
                textColor="dark"
                textAlign="center"
                p={1}
                my={6}
              >
                We are a shipping logistics company.
              </Text>
              <Text
                as="p"
                fontFamily="body"
                fontSize="bodyContent"
                textColor="dark"
                textAlign="left"
                fontWeight="light"
              >
                That means we work to manage the intricacies of your individual
                shipping process and capabilities. We are a business that
                understands the value of small, domestic businesses to our
                national economy. We also understand how essential individual
                actions are in a global economy. Our driving purpose is to
                enable small businesses to gain stability and success on a
                domestic and global stage.
                <br />
                <br />
                We believe in partnership, communication, and teamwork. In order
                to push those qualities out into the world, we treat our
                customers with respect and care. When you work with the
                Magnified Team, you gain an ally in the harsh world of
                shipping--you join the many customers who have us fighting for
                their well-being and success.
              </Text>
            </Flex>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default about;
