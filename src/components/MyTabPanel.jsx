import { Box, SimpleGrid, Center } from "@chakra-ui/layout";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  IconButton,
} from "@chakra-ui/react";
import StructureCard from "./cards/structureCard";
import MembershipCard from "./cards/memberCard";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
export default function (props) {
  //pagination hiihed rowNums heregtei tootsoolood heden huudastai gedgee haruulna.
  const { categories, posts, colNums, rowNums, structure } = props;
  const [activeIndex, setActiveIndex] = useState(1);

  let pn = Math.ceil(posts.length / (colNums * rowNums));
  let pages = [];
  const [startIndex, setStartIndex] = useState(0);
  let psts = posts.slice(startIndex, rowNums * colNums);

  const pagination = (index) => {
    for (let i = 1; i <= pn; i++) {
      pages.push(
        <Box key={i} border={activeIndex === i ? "1px solid black" : null}>
          {i}
        </Box>
      );
    }

    return (
      <Center>
        <IconButton
          isRound={true}
          colorScheme="brand"
          variant="ghost"
          icon={<ChevronLeftIcon />}
        />
        {pages}
        <IconButton
          isRound={true}
          variant="ghost"
          colorScheme="brand"
          icon={<ChevronRightIcon />}
        />
      </Center>
    );
  };

  return (
    <Tabs colorScheme="brand">
      <TabList fontWeight="600" justifyContent="space-between">
        {categories.map((el, ind) => (
          <Tab key={ind} fontWeight="600" key={ind}>
            {el}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel p="1rem 0">
          <SimpleGrid columns={colNums} spacing={4}>
            {psts.map((el, ind) =>
              structure ? (
                <StructureCard key={ind} />
              ) : (
                <MembershipCard key={ind} />
              )
            )}
          </SimpleGrid>
          {pagination(activeIndex)}
        </TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
        <TabPanel>4</TabPanel>
        <TabPanel>5</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
