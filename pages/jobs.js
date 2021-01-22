import {
  Box,
  Button,
  Text,
  Flex,
  useBreakpointValue,
  Image,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Image as NextImage } from "next/image";
import { useState } from "react";

const jobs = () => {
  const isLargerThan650 = useBreakpointValue({ base: false, lg: true });
  const [currentFile, setCurrentFile] = useState(null);

  return (
    <div>
      <Box w="100%" minH="100vh" bgColor="light" pb={6}>
        <Box w="100%" overflow="hidden">
          <Text
            fontFamily="imgText"
            fontWeight="bold"
            textColor="light"
            fontSize="imgText"
            textAlign="center"
            textShadow="2px 2px 20px black"
            py="2em"
            minH="400px"
            px={2}
            w="100%"
            background="no-repeat center/cover url(img/wynand-van-poortvliet-kWUZKKBR2Ag-unsplash.jpg)"
            bgSize={isLargerThan650 ? "100%" : "110%"}
            bgPos="50% 80%"
          >
            Jobs
          </Text>
        </Box>
        <Flex
          flexDir={isLargerThan650 ? "row" : "column"}
          maxW="1200px"
          mx="auto"
        >
          <Box flexShrink={1} w="100%" p={6}>
            <Text fontSize="bodyHeader" textColor="dark">
              Become a Magnified Representative:
            </Text>
            <Text fontSize="14px" fontWeight="light" textColor="dark">
              We are looking for people who have a strong work ethic, are
              friendly even when feeling rejected, have a background in sales,
              and have a propensity for quickly learning new programs. We expect
              our representatives to maintain consistent contact with their
              customers, to cultivate a friendship with their customers, and to
              learn the needs of customers.
              <br />
              <br />
              The day to day operations of a Magnified Representative include
              door-to-door sales, analyzing spreadsheets and invoices, and
              calling other parties to manage issues relating to your personal
              customers.
              <br />
              <br />
              As a representative you make money based on your successful
              aqcuisition of customers and their savings. It is in your best
              interest to benefit your customers, not trick them into buying a
              product that doesn’t benefit them. We work with our customers, not
              against them.
              <br />
              <br />
              If you think you’re a right fit for us, please apply below.
            </Text>
          </Box>
          <Box
            flexShrink={1}
            w="100%"
            p={6}
            alignSelf={isLargerThan650 && "flex-end"}
          >
            <Text fontSize="36px" textColor="dark">
              Our Locations:
            </Text>
            <Text fontSize="14px" fontWeight="light" textColor="dark">
              We have offices in California, Nevada, Arizona, Utah, Texas, and
              more.
            </Text>
            <Image as={NextImage} src="/img/us-chart.jpg" w="80%" />
            <Text fontSize="14px" fontWeight="light" textColor="dark">
              If you don’t live in any of those locations, please don’t hesitate
              to reach out! We’re looking to expand!
            </Text>
          </Box>
        </Flex>
        <Box
          maxW="800px"
          mx={isLargerThan650 ? "auto" : 5}
          border="1px"
          borderRadius="7px"
          borderColor="dark"
          p={4}
          bg="gray.700"
          textColor="light"
        >
          <VStack
            as="form"
            spacing={3}
            onSubmit={(e) => {
              e.preventDefault();
              window.alert("Appliction Submitted.");
            }}
          >
            <Text mr="auto" fontSize="28px">
              New Employee Application:
            </Text>
            <FormControl id="name" isRequired>
              <FormLabel>Name:</FormLabel>
              <Input
                variant="filled"
                bg="gray.400"
                _placeholder={{ textColor: "gray.700" }}
                _hover={{ bg: "gray.300" }}
                _focus={{ bg: "gray.400" }}
                textColor="gray.800"
                type="text"
                placeholder="FirstName LastName"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email:</FormLabel>
              <Input
                variant="filled"
                bg="gray.400"
                _placeholder={{ textColor: "gray.700" }}
                _hover={{ bg: "gray.300" }}
                _focus={{ bg: "gray.400" }}
                textColor="gray.800"
                type="email"
                placeholder="email@domain.com"
              />
            </FormControl>
            <FormControl id="resume" isRequired>
              <FormLabel>Upload your resume: </FormLabel>
              <span>
                <Button
                  variant="outline"
                  as="label"
                  htmlFor="resume-file"
                  _hover={{ bg: "gray.600" }}
                  _active={{ bg: "gray.800" }}
                >
                  Upload File
                </Button>
                {currentFile !== null && "   " + currentFile}
              </span>
              <Input
                id="resume-file"
                variant="unstyled"
                type="file"
                onChange={(e) => setCurrentFile(e.target.files[0].name)}
                hidden
              />
            </FormControl>
            <Button colorScheme="yellow" type="submit" w="100%" mt={3}>
              Submit
            </Button>
          </VStack>
        </Box>
      </Box>
    </div>
  );
};

export default jobs;
