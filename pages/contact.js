import {
  Box,
  Text,
  Flex,
  VStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Box w="100%" minH="100vh" bgColor="dark" pb={6}>
        <Box maxW="80%" mx="auto" py={10}>
          <Text fontSize="imgText" textColor="secondary">
            Contact Us:
          </Text>
          <Flex flexWrap="wrap">
            <VStack align="left" textColor="light">
              <Box pl={2}>
                <Box py={3}>
                  <Text fontSize="18px" fontWeight="bold">
                    Customer Service
                  </Text>
                  <Text fontSize="14px" fontWeight="light">
                    <i>888-429-5583 x 1</i>
                  </Text>
                  <Text fontSize="14px" fontWeight="light">
                    <i>info@magnifiedship.com</i>
                  </Text>
                </Box>
                <Box py={3}>
                  <Text fontSize="18px" fontWeight="bold">
                    New Account Information
                  </Text>
                  <Text fontSize="14px" fontWeight="light">
                    <i>888-429-5583 x 1</i>
                  </Text>
                  <Text fontSize="14px" fontWeight="light">
                    <i>info@magnifiedship.com</i>
                  </Text>
                </Box>
                <Box py={3}>
                  <Text fontSize="18px" fontWeight="bold">
                    Billing Department
                  </Text>
                  <Text fontSize="14px" fontWeight="light">
                    <i>888-429-5583 x 2</i>
                  </Text>
                  <Text fontSize="14px" fontWeight="light">
                    <i>billing@magnifiedship.com</i>
                  </Text>
                </Box>
                <Box py={3}>
                  <Text fontSize="18px" fontWeight="bold">
                    Freight Department
                  </Text>
                  <Text fontSize="14px" fontWeight="light">
                    <i>888-429-5583 x 4</i>
                  </Text>
                  <Text fontSize="14px" fontWeight="light">
                    <i>freight@magnifiedship.com</i>
                  </Text>
                </Box>
              </Box>
            </VStack>
            <Box ml="auto" mt={3}>
              <Box
                as="form"
                fontWeight="light"
                textColor="light"
                flexWrap="wrap"
                border="1px"
                borderColor="secondary"
                borderRadius={7}
                p={5}
                onSubmit={(e) => {
                  e.preventDefault();
                  window.alert(
                    "Submitted:\n\nHi! My name is " +
                      e.target.name.value +
                      " and I want to contact the Magnified Team with regard to the following: \n" +
                      e.target.serviceIssue.value +
                      "\n\nPlease contact me at " +
                      e.target.email.value
                  );
                }}
              >
                <Text>
                  Hi! My name is&nbsp;
                  <Input
                    id="name"
                    maxW="200px"
                    placeholder="FirstName LastName"
                    textColor="light"
                    mx={2}
                    variant="outline"
                    size="md"
                    textAlign="center"
                    required
                  />
                  &nbsp;and I want to contact the Magnified Team with regard to
                  the following:
                </Text>
                <Textarea
                  id="serviceIssue"
                  placeholder="...a topic that I will write about in this box."
                  w="100%"
                  my={3}
                  size="md"
                  resize="vertical"
                  borderColor="light"
                  rows="8"
                  required
                />
                <Text mb={3}>
                  Please contact me at
                  <Input
                    id="email"
                    type="email"
                    maxW="200px"
                    placeholder="username@email.com"
                    textColor="light"
                    mx={2}
                    variant="outline"
                    size="md"
                    textAlign="center"
                    required
                  />
                  .
                </Text>
                <Button
                  type="submit"
                  w="100%"
                  bg="primary"
                  fontWeight="medium"
                  _hover={{ bg: "#004C8F" }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default contact;
