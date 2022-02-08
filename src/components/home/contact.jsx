import { Flex, VStack, Box, HStack, Stack } from "@chakra-ui/layout";
import { Text, Image, IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { __ } from "../../utils";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
} from "../../Icons";
import GoogleMap from "../googleMap";

export default function () {
  return (
    <Box p="0 15rem" w="100%">
      <HStack spacing={8}>
        <VStack spacing={8} alignItems="flex-start" w="30%">
          <Text fontWeight="700" fontSize="2rem">
            {__("Contact Us")}
          </Text>
          <Stack spacing={4}>
            <Flex>
              <Image mr="1rem" h="22px" src="/images/location.png" />
              <Text>
                Улаанбаатар хот, Сүхбаатар дүүрэг 1-р хороо, Жамъяан гүний
                гудамж 18-1, Даун Таун 8-р хороо
              </Text>
            </Flex>
            <Flex>
              <Image mr="1rem" h="22px" src="/images/phone.png" />
              <Text>7717-1818</Text>
            </Flex>
            <Flex>
              <MailIcon
                width="5"
                height="5"
                mr={4}
                viewBox="0 0 22 20"
                fill="rgba(0,0,0,0.6)"
              />
              <Text>all4education@gmail.com</Text>
            </Flex>
            <Flex justifyContent="center">
              <IconButton
                m={2}
                colorScheme="brandSoft"
                _hover={{ border: "2px solid #0398FC" }}
                borderRadius="30px"
                icon={<FacebookIcon width="5" height="5" viewBox="0 0 21 20" />}
              />
              <IconButton
                m={2}
                colorScheme="brandSoft"
                _hover={{ border: "2px solid #0398FC" }}
                borderRadius="30px"
                icon={
                  <InstagramIcon width="5" height="5" viewBox="0 0 21 20" />
                }
              />
              <IconButton
                m={2}
                colorScheme="brandSoft"
                _hover={{ border: "2px solid #0398FC" }}
                borderRadius="30px"
                icon={<TwitterIcon width="5" height="5" viewBox="0 0 21 18" />}
              />
            </Flex>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={4}
            alignItems="center"
            w="100%"
            p={2}
            border="1px solid #0398FC"
            borderRadius="16px 16px 0 16px"
          >
            <MailIcon
              width="5"
              height="5"
              viewBox="0 0 22 20"
              fill="brand.500"
            />
            <Box>
              <Text
                textTransform="capitalize"
                fontWeight="bold"
                color="brand.500"
                fontSize="12px"
              >
                {__("join us our team")}
              </Text>
              <Text opacity="0.5">132456@examplemail.com</Text>
            </Box>
            <IconButton
              variant="ghost"
              borderRadius="30px"
              color="brand.500"
              icon={<ArrowForwardIcon />}
            />
          </Stack>
        </VStack>
        <Box width="70%" h="380px">
          <GoogleMap />
        </Box>
      </HStack>
    </Box>
  );
}
