import Slider from "react-slick";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, VStack, Box, HStack, Stack } from "@chakra-ui/layout";
import { Text, Image, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { __ } from "../../utils";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
} from "../../Icons";

export default function () {
  const sliderBg = useColorModeValue("vanilla.500", "vanilla.100");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <Box h="500px" pl="32px" pr="32px">
        <Box
          borderRadius="64px"
          h="100%"
          bgColor={sliderBg}
          padding="35px"
          w="100%"
        >
          <HStack spacing={8}>
            <VStack spacing={8} alignItems="flex-start" pl="200px" pr="100px">
              <Text fontSize="42px" fontWeight="bold">
                {__(
                  "We want effect, transparent and accountable governance of education sector"
                )}
              </Text>
              <Stack spacing={4}>
                <Flex fontSize="16px">
                  <Text>
                    The core group for the establishment of the Mongolian
                    National Coalition for Education (tentatively “All for
                    Education” National Civil Society Coalition) was established
                    in February 2010 with support from CSEF.
                  </Text>
                </Flex>
                <Box>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    borderRadius="32px 32px 0 32px"
                    colorScheme="brand"
                    fontSize="18px"
                  >
                    {__("Read more")}
                  </Button>
                </Box>
              </Stack>
            </VStack>
            <Box boxSize="75%">
              <Image src="/images/Group20.png" />
            </Box>
          </HStack>
        </Box>
      </Box>

      <Box h="500px" pl="25px" pr="25px">
        <Box borderRadius="64px" h="100%" bgColor={sliderBg} p="35px" w="100%">
          <HStack spacing={8}>
            <VStack spacing={8} alignItems="flex-start" pl="200px" pr="100px">
              <Text fontSize="42px" fontWeight="bold">
                {__(
                  "We want effect, transparent and accountable governance of education sector"
                )}
              </Text>
              <Stack spacing={4}>
                <Flex fontSize="16px">
                  <Text>
                    The core group for the establishment of the Mongolian
                    National Coalition for Education (tentatively “All for
                    Education” National Civil Society Coalition) was established
                    in February 2010 with support from CSEF.
                  </Text>
                </Flex>
                <Box>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    borderRadius="32px 32px 0 32px"
                    colorScheme="brand"
                    fontSize="18px"
                  >
                    {__("Read more")}
                  </Button>
                </Box>
              </Stack>
            </VStack>
            <Box boxSize="75%">
              <Image src="/images/Group20.png" />
            </Box>
          </HStack>
        </Box>
      </Box>

      <Box h="500px" pl="25px" pr="25px">
        <Box borderRadius="64px" h="100%" bgColor={sliderBg} p="35px" w="100%">
          <HStack spacing={8}>
            <VStack spacing={8} alignItems="flex-start" pl="200px" pr="100px">
              <Text fontSize="42px" fontWeight="bold">
                {__(
                  "We want effect, transparent and accountable governance of education sector"
                )}
              </Text>
              <Stack spacing={4}>
                <Flex fontSize="16px">
                  <Text>
                    The core group for the establishment of the Mongolian
                    National Coalition for Education (tentatively “All for
                    Education” National Civil Society Coalition) was established
                    in February 2010 with support from CSEF.
                  </Text>
                </Flex>
                <Box>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    borderRadius="32px 32px 0 32px"
                    colorScheme="brand"
                    fontSize="18px"
                  >
                    {__("Read more")}
                  </Button>
                </Box>
              </Stack>
            </VStack>
            <Box boxSize="75%">
              <Image src="/images/Group20.png" />
            </Box>
          </HStack>
        </Box>
      </Box>
    </Slider>
  );
}
