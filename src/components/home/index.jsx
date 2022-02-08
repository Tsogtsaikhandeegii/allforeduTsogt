import { Box, VStack } from "@chakra-ui/layout";
import { Image, Text, Button } from "@chakra-ui/react";
import Slider from "./slider";
import Product from "./ourProducts";
import Activity from "./ourActivities";
import BottomSlider from "./slider2";
import Contact from "./contact";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function () {
  return (
    <>
      <Slider />
      <Box h="5rem"></Box>
      <VStack spacing="5rem">
        <Product />
        <Image src="/images/Home1.png" />
        <Activity />
        <BottomSlider />
        <Contact />
      </VStack>
      <Box h="5rem"></Box>
    </>
  );
}
 