import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="danger" w="100%">
      <Flex
        direction={useBreakpointValue({ base: "column", md: "row" })}
        w="100%"
        p={5}
        minH="170px"
        align={useBreakpointValue({ base: "flex-start", md: "center" })}
        justify="space-around"
        textColor="light"
      >
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
      </Flex>
    </Box>
  );
};

export default Footer;
