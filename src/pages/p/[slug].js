import React from "react";
import Layout from "../../components/layouts/Layout"
import Slider from "react-slick";
import { Box, Flex, SimpleGrid } from "@chakra-ui/layout";
import Card from "../../components/cards/activityCard"
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { IconButton, Heading, Text } from "@chakra-ui/react";
import { __ } from "../../utils";
export default class extends React.Component {

    constructor(props) {
        super(props);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    state = {
        psts: new Array(26).fill(0)
    }

    renderSlider(start, end) {
        let d = this.state.psts.slice(start, end);
        return (
            d.map((el, ind) => <Card backColor="white" key={ind} />)
        )
    }

    nextPage = () => {
        this.slider.slickNext();
    }
    prevPage = () => {
        this.slider.slickPrev();
    }
    render() {
        let psts = new Array(26).fill(0);
        let pages = Math.ceil(psts.length / 6);
        let boxes = [];
        let end = 0;
        for (let i = 0; i < pages; i++) {
            boxes.push(<Box p="0 1rem" key={i} >{i + 1}</Box>);
        }

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Layout>
                <Box p="0 15rem" className="custom-grid" >
                    <Box mb={4} >
                        <Text fontWeight="bold" fontSize="18px" >{__('All activities')}</Text>
                        <hr style={{ width: '100px' }} className='custom-divider' />
                    </Box>
                    <Slider ref={c => this.slider = c} {...settings}>
                        {
                            boxes.map((el, ind) => {
                                end = end + 6;
                                return (
                                    <SimpleGrid key={ind} spacing={4} display="grid !important" columns={3} >{this.renderSlider(end - 6, end)}</SimpleGrid>
                                )
                            })
                        }
                    </Slider>
                    <Flex alignItems='center' justifyContent="center" >
                        <IconButton onClick={() => this.prevPage()} isRound variant="ghost" icon={<ChevronLeftIcon />} />
                        {boxes}
                        <IconButton onClick={() => this.nextPage()} isRound variant="ghost" icon={<ChevronRightIcon />} />
                    </Flex>
                </Box>
            </Layout>
        )
    }
}