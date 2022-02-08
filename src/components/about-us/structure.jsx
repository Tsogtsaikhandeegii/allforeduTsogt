import { Center, Box } from "@chakra-ui/layout";
import TabPanel from "../MyTabPanel";
import { Text } from "@chakra-ui/react";
import { __ } from "../../utils";
import {Col, Row} from 'react-bootstrap'

<Row>
  <Col xs={4}></Col>
  <Col xs={4}></Col>
  <Col xs={4}></Col>
</Row>

export default function (props) {
  let categories = [
    "Our board members",
    "Our board members2",
    "Our board members3",
    "Our borad members4",
    "Our board members5",
  ];
  let posts = new Array(1).fill(0);
  let rowNums = 1;
  let colNums = 1;
  return (
    <Box>
      <Center>
        <Text fontSize="3xl" fontWeight="bold">
          {__("Structure")}
        </Text>
      </Center>
      <TabPanel
        categories={categories}
        posts={posts}
        colNums={colNums}
        rowNums={rowNums}
        structure={true}
      />
    </Box>
  );
}
