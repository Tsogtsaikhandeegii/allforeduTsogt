import React from "react";
import axios from "axios";
import Config from "../../config";
import { Flex, Spacer, Box, Text, HStack } from "@chakra-ui/layout";
import {
  Image,
  Button,
  useColorMode,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
// import Img from "next/image";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import { __ } from "../../utils";
import Link from "next/link";
import Search from "./Search";

class MenuComponent extends React.Component {
  state = { headerMenu: [] };

  componentDidMount() {
    // axios
    //   .get(`${Config.apiUrl}/menus/v1/menus/header-menu`)
    //   .then(res =>
    //     this.setState({
    //       headerMenu: res.data,
    //       loading: true
    //     })
    //   )
    //   .catch(err => console.log(err))
  }

  render() {
    return (
      // <Container maxW="xl" bgColor="gray.300" >
      // <Flex
      //   h={{ base: "auto", md: "10vh" }}
      //   py={[0, 10, 20]}
      //   direction={{ base: "column-reverse", md: "row" }}
      // >
      <Menu />
      // </Flex>

      // // </Container>
    );
  }
}

function Menu({ data }) {
  const menus = [
    "home",
    "about us",
    "membership",
    "activities",
    "products",
    "policy",
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  const textOpacity = useColorModeValue("0.6", "1");

  const renderMenu = () => {
    return (
      <>
        {menus.map((el, index) => (
          <Box
            key={index}
            fontSize="16px"
            line-height="24px"
            text-align=""
            pl="1rem"
            pr="1rem"
            
            // display={['none', 'none', 'flex', 'flex']}
          >
            <Text
              pb="0.5rem"
              _hover={{
                borderBottom: "3px solid #0398fc",
                color: "brand.500",
                fontWeight: 700,
              }}
              textTransform="uppercase"
            >
              <Link href={`/c/${el}`}>
                {el}
              </Link>
            </Text>
          </Box>
        ))}
      </>
    );
  };
  const renderControllers = () => {
    return (
      <>
        <IconButton borderRadius={30} icon={<SearchIcon />} />
        <Button
          borderRadius="30px"
          leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Dark" : "Light"} mode
        </Button>
        
      </>
    );
  };
  return (
    <HStack
      h="100px"
      pr="2rem"
      pl="2rem"
      pos="sticky"
      top={0}
      zIndex={100}
      bgColor={colorMode === "light" ? "white" : "black"}
    >
      <HStack mr="3rem">
        <Image
          w="96px"
          h="76px"
          left="calc(50% - 96px/2)"
          top="calc(50% - 76px/2)"
          margin="10px 0px"
          src="/images/logo.png"
          mr="1rem"
        />
        <Flex direction="column">
          <Text
            fontWeight="bold"
            color="#0398FC"
            w="341px"
            h="28px"
            size="20px"
            fontFamily="Rubik"
            fontSize="20px"
            lineHeight="28px"
            letter-spacing="0.15px"
          >
            {__("Бүх нийтийн боловсролын төлөө")}
          </Text>
          <Text
            opacity={textOpacity}
            fontSize="12px"
            w="279px"
            h="24px"
            top="28px"
            fontFamily="Rubik"
            fontSize="16px"
            lineHeight="24px"
            letter-spacing="0.15px"
          >
            {__("Иргэний нийгмийн үндэсний эвлэл")}
          </Text>
        </Flex>
      </HStack>
      <HStack>{renderMenu()}</HStack>
      <Spacer />
      <HStack>
        {renderControllers()}
        <Image
          w="33px"
          h="32px"
          left="7.5px"
          top="8px"
          src="/images/mng.png"
          mr="1rem"
        />
      </HStack>
    </HStack>
  );
}

export default MenuComponent;
