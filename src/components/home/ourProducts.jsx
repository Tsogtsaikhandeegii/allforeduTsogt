import { Box, Flex, HStack, VStack, Spacer } from "@chakra-ui/layout";
import { Text, Button } from "@chakra-ui/react"
import { __ } from "../../utils"
import Card from "../cards/productCard"
import { ArrowForwardIcon } from "@chakra-ui/icons";
import config from "../../config";
import WPAPI from "wpapi";
const wp = new WPAPI({ endpoint: config.apiUrl });

export default class ourProducts extends React.Component {
    
    constructor() {
        super();
        this.state = {
            ourProduct : {},
        };
      }
      componentDidMount() {

        wp.posts()
        .categories(2)
        .embed()
        .perPage(3)
        .then((data) => {
          this.setState({ ourProduct: data });
        })
        .catch((err) => console.log(err));
        
      }


    render(){
        const { ourProduct } = this.state;
        console.log(ourProduct)


        const arr = new Array(3).fill(0);
       
        return (
            <Flex pos="relative">
                <Box w="100%" h="350px" bgColor="#0398FC1F" pos="absolute" zIndex="0" ></Box>
                <VStack m="0 15em " zIndex="2">
                    <Flex w="100%" p="15px">
                        <Text fontSize="2xl" fontWeight="600" textTransform="capitalize">{__("our products")}</Text>
                        <Spacer />
                        <Button fontWeight="bold" rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="link">{__("See all products")}</Button>
                    </Flex>
                    <HStack justifyContent="space-between">
                        {arr.map((el, ind) => <Box key={ind} w="30%"><Card text={true} button={true} data={ind} /></Box>)}
                    </HStack>
                </VStack>
            </Flex >
        )
    }
}