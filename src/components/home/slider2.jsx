import { Box, Flex, VStack } from "@chakra-ui/layout"
import Slider from "react-slick"
import { useState } from "react"
import { Button, Text, Image } from "@chakra-ui/react";
import { __ } from "../../utils"
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function () {
    const arr = new Array(3).fill(0);
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const settings = {
        arrows: false,
    };

    return (
        <Box w="100%" p="5rem 15rem" bgColor="vanilla.500">
            {/* <div> */}
            <Box display="flex" justifyContent="space-between" >
                <Box w="50%" >
                    <Slider className="bottomSlider" {...settings} dots={true} autoplay={true} autoplaySpeed={3000} pauseOnHover={true} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                        {
                            arr.map((el, ind) => (
                                <VStack key={ind} spacing="2rem" >
                                    <Text fontSize="34px" fontWeight="bold" >Research & Monitoring</Text>
                                    <Text fontSize="16px">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
                                    <Button rightIcon={<ArrowForwardIcon />} borderRadius="32px 32px 0 32px" colorScheme="brand" >{__("Read more")}</Button>
                                </VStack>
                            ))
                        }
                    </Slider>
                </Box>
                <Slider
                    className="bottomSlider2"
                    asNavFor={nav1}
                    {...settings}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {
                        arr.map((el, ind) => (
                            <Box key={ind}  >
                                <Image borderRadius="48px" src="/images/Rectangle81.png" />
                            </Box>
                        ))
                    }
                </Slider>
            </Box>
            {/* </div> */}
        </Box>
    )
}