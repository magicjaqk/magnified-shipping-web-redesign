import {
  Box,
  Icon,
  Flex,
  Stack,
  Text,
  Link,
  Button,
  Image,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";

const Nav = () => {
  const [isLargerThan650] = useMediaQuery("(min-width: 650px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box w="100%" h="70px" background="#ffffff">
        <Flex
          flexDirection="row"
          alignContent="center"
          justifyContent="flex-end"
          h="100%"
          p={4}
        >
          <Image
            src="/img/magnified-logo.png"
            h="70px"
            top="0"
            left="0"
            position="absolute"
            mr="auto"
          />
          {isLargerThan650 ? (
            <Stack
              spacing={7}
              isInline
              alignItems="center"
              fontFamily="nav"
              fontWeight="medium"
            >
              <Link fontSize="18px">Home</Link>
              <Link fontSize="18px">About</Link>
              <Link fontSize="18px">Contact</Link>
              <Link fontSize="18px">Jobs</Link>
              <Button
                borderRadius="2px"
                bg="primary"
                _hover={{ bg: "#004C8F" }}
                _active={{ bg: "primary" }}
              >
                <Text
                  fontSize="18px"
                  textColor="light"
                  fontWeight="medium"
                  px={4}
                >
                  Sign In
                </Text>
              </Button>
            </Stack>
          ) : (
            <>
              <Button
                ref={btnRef}
                variant="link"
                onClick={onOpen}
                textColor="dark"
              >
                <Text fontSize="18px" fontWeight="bold" px={4}>
                  Menu
                </Text>
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay>
                  <DrawerContent>
                    <DrawerCloseButton />
                    <Stack
                      mt={10}
                      spacing={7}
                      alignItems="center"
                      fontFamily="nav"
                      fontWeight="medium"
                    >
                      <Link fontSize="18px">Home</Link>
                      <Link fontSize="18px">About</Link>
                      <Link fontSize="18px">Contact</Link>
                      <Link fontSize="18px">Jobs</Link>
                      <Button
                        borderRadius="2px"
                        bg="primary"
                        _hover={{ bg: "#004C8F" }}
                        _active={{ bg: "primary" }}
                      >
                        <Text
                          fontSize="18px"
                          textColor="light"
                          fontWeight="medium"
                          px={4}
                        >
                          Sign In
                        </Text>
                      </Button>
                    </Stack>
                  </DrawerContent>
                </DrawerOverlay>
              </Drawer>
            </>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
