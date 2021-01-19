import {
  Box,
  Flex,
  Stack,
  Text,
  Link,
  Button,
  Image,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link as NextLink } from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

const Nav = () => {
  const isLargerThan650 = useBreakpointValue({ base: false, md: true });
  //const [isLargerThan650] = useMediaQuery("(min-width: 650px)");
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
              fontSize="18px"
            >
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/jobs">Jobs</Link>
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
                  <HamburgerIcon w={6} h={6} />
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
                    <DrawerBody>
                      <Stack
                        mt={12}
                        spacing={7}
                        alignItems="center"
                        fontFamily="nav"
                        fontWeight="medium"
                        fontSize="18px"
                      >
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/jobs">Jobs</Link>
                        <Button
                          borderRadius="2px"
                          bg="primary"
                          _hover={{ bg: "#004C8F" }}
                          _active={{ bg: "primary" }}
                        >
                          <Text
                            textColor="light"
                            fontWeight="medium"
                            fontSize="18px"
                            px={4}
                          >
                            Sign In
                          </Text>
                        </Button>
                      </Stack>
                    </DrawerBody>
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
