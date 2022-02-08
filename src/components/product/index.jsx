import { Box, Stack, SimpleGrid } from "@chakra-ui/layout"
import { Text, Heading } from "@chakra-ui/react"
import { __ } from "../../utils"
import { PageHeader } from "../activity"
import Card from "../cards/productCard";
export default function () {
    let psts = new Array(6).fill(0);
    return (
        <Box p="0 15rem" >
            <PageHeader />
            <Stack spacing={4} >
                <Heading size="md" >{__('Special Products')}</Heading>
                <hr className="custom-divider" style={{ width: '170px' }} />
                <SimpleGrid columns={3} spacing={4} >
                    {psts.map((el, ind) => <Card button={false} />)}
                </SimpleGrid>
            </Stack>
        </Box>
    )

}