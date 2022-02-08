import {
  Box,
  Stack,
  Grid,
  GridItem,
  Center,
  SimpleGrid,
} from "@chakra-ui/layout";
import { Heading, Divider, Text, Button, Image } from "@chakra-ui/react";
import { __ } from "../../utils";
import Link from "next/link";
import Card from "../cards/activityCard";

export default function () {
  let posts = new Array(3).fill(0);

  return (
    <>
      <Box p=" 0 15rem">
        <PageHeader />
      </Box>
      <Box bgColor="#F6EFE6" p="3rem 15rem">
        <Stack spacing={4}>
          <Box alignSelf="end">
            <Link href={`/p/all-activity`}>
              <a>
                <Button variant="link" colorScheme="brand">
                  {__("See all activities")}
                </Button>
              </a>
            </Link>
          </Box>
          <SimpleGrid columns={3} spacing={4}>
            {posts.map((el, ind) => (
              <Card key={ind} data={el} backColor="transparent" />
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </>
  );
}
export function PageHeader({ data }) {
  return (
    // <Box p=" 0 15rem" >
    <Grid templateRows="1" templateColumns="repeat(10, 1fr)">
      <GridItem
        colSpan={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        
      >
        <Stack spacing={4} >
          <Heading as="h2" size="xl">
          Find Your Activites That Make Bright Future
          </Heading>
          <hr className="custom-divider" />
          <Text opacity="0.7">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </Text>
        </Stack>
        <Box>
          <Button mt={8} borderRadius="32px 32px 0 32px" colorScheme="brand">
            {__("Get started")}
          </Button>
        </Box>
      </GridItem>
      <GridItem colSpan={6} p={4} padding="3rem 0 3rem 3rem">
      <video id="videoBG" controls muted loop >
              <source src="..\video\video.mp4" type="video/mp4"></source>
            </video>

      </GridItem>
    </Grid>
    // </Box>
  );
}
