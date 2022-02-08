import { Box, Flex, HStack, VStack } from "@chakra-ui/layout";
import { Text, Image, Button, Divider, IconButton } from "@chakra-ui/react";
import { __ } from "../../utils";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import RatingPage from "./RatingPage";
import React, { useState } from 'react';
import { MDBContainer, MDBRating } from 'mdbreact';


export default function ({ data, button, text }) {




  return (
    <VStack
      _hover={{ border: "2px solid #0398FC" }}
      alignItems="self-start"
      spacing="12px"
      w="100%"
      borderRadius="16px"
      p="15px"
      bgColor="white"
      boxShadow="1px 2px 6px 2px rgba(0, 0, 0, 0.06)"
    >
      {text ? (
        <Text textTransform="capitalize" fontWeight="bold" color="brand.800">
          Master English: Improve Your Speaking
        </Text>
      ) : null}
      <Image
        w="100%"
        height="150px"
        objectFit="cover"
        borderRadius="16px"
        src="/images/com.png"
      />
      {button ? (
        <Button borderRadius="30px" colorScheme="brand">
          {__("English course")}
        </Button>
      ) : null}
      {text ? null : (
        <Text textTransform="capitalize" fontWeight="bold" color="brand.800">
          Master English: Improve Your Speaking
        </Text>
      )}
      <Text opacity="0.6" color="black">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a
        typeface.
      </Text>
      <HStack spacing="24px">
        <Flex color="black">
          <Image mr="10px" src="/images/pro2.png" /> 10x Lesson
        </Flex>
        <Flex color="black">
          <Image mr="10px" src="/images/online-edu1.png" /> 10x Lesson
        </Flex>
      </HStack>
      <Divider opacity="0.4" />
      <Flex w="100%" justifyContent="space-between">
        <Flex fontWeight="bold" color="brand.800">
          <RatingPage/>
          <h1>Vote 25</h1>
        </Flex>
        <IconButton
          borderRadius="30px"
          colorScheme="brand"
          icon={<ArrowForwardIcon color="white" />}
        />
      </Flex>
    </VStack>
  );
}
