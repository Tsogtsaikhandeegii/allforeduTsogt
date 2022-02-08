import { Box, Flex, HStack, VStack, Spacer } from "@chakra-ui/layout";
import { Text, Button } from "@chakra-ui/react"
import { __ } from "../../utils"
import Card from "../cards/activityCard"
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function () {
    const arr = new Array(3).fill(0);
    return (
        <Flex pos="relative">
            <Box w="100%" h="350px" bgColor="#0398FC1F" pos="absolute" zIndex="0" ></Box>
            <VStack m="0 15em " zIndex="2">
                <Flex w="100%" p="15px">
                    <Text fontSize="2xl" fontWeight="600" textTransform="capitalize">{__("our activities")}</Text>
                    <Spacer />
                    <Button fontWeight="bold" rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="link">{__("See all activities")}</Button>
                </Flex>
                <HStack justifyContent="space-between">
                    {arr.map((el, ind) => <Box key={ind} w="30%"><Card data={ind} backColor="white" /></Box>)}
                </HStack>
            </VStack>
        </Flex >
    )
}