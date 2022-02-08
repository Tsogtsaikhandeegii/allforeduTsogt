import React from "react";
import axios from 'axios';
import Config from '../../config';
import { Flex, Spacer, Box, Text, HStack } from "@chakra-ui/layout";
import { Image, Button, useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
// import Img from "next/image";
import { __ } from "../../utils";
import Link from "next/link";

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
      <Menu />
      // </Container>
    );
  }
}

function Menu({ data }) {
  const menus = ["products", "news", "about us", "law", "membership", "answers"];
  const { colorMode, toggleColorMode } = useColorMode();
  const textOpacity = useColorModeValue("0.6", "1");


  const renderMenu = () => {
    return (
      <>
        {menus.map((el, index) => <Box key={index} fontSize='16px' line-height='24px' text-align='' pl="1rem" pr="1rem"  ><Text pb="0.5rem" _hover={{ borderBottom: "3px solid #0398fc", color: "brand.500", fontWeight: 700 }} textTransform="uppercase"><Link href={`/c/${el}`} ><a>{el}</a></Link></Text></Box>)
        }
      </>
    )
  }
  
  return (
    <HStack h="100px" pr="2rem" pl="2rem" pos="sticky" top={0} zIndex={100} bgColor={colorMode === "light" ? "white" : "black"} >
      <HStack mr="3rem" >
        <Image w="96px" h="76px" left='calc(50% - 96px/2)' top='calc(50% - 76px/2)' margin='10px 0px' src="/images/logo.png" mr="1rem" />
        
      </HStack>
      <HStack >{renderMenu()}</HStack>
      <Spacer />
      
    </HStack>
  )
}

export default MenuComponent;


